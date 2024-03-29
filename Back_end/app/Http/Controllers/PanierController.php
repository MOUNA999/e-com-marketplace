<?php

namespace App\Http\Controllers;
use Cart;
use Illuminate\Http\Request;
use App\Models\Produit;
use App\Models\Panier;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
class PanierController extends Controller
{
    public function getCart($id_user) 
    {
        $panier = Panier::where('user_id', $id_user)->first();
        if (!$panier) {
            return response()->json(['message' => 'Panier not found'], 404);
        }

        $produits = $panier->produits()->get();

        return response()->json(['panier' => $panier, 'produits' => $produits], 200);
    
    }

 // Ajouter un produit au panier
 public function addToCart($id_user, $id_produit)
 {

 // Rechercher ou créer le panier de l'utilisateur
 $panier = Panier::firstOrCreate(['user_id' => $id_user]);

 // Rechercher le produit
 $produit = Produit::find($id_produit);
 if (!$produit) {
     return response()->json(['message' => 'Produit not found'], 404);
 }

 // Vérifier si le produit est déjà dans le panier
 $produitDansPanier = $panier->produits()->find($produit->id);
 if ($produitDansPanier) {
     // Le produit est déjà dans le panier, augmenter la quantité
     $pivotRow = $panier->produits()->where('produit_id', $produit->id)->first()->pivot;
     $quantite = $pivotRow->quantite + 1;
     $panier->produits()->updateExistingPivot($produit->id, ['quantite' => $quantite]);
 } else {
     // Le produit n'est pas dans le panier, l'ajouter
     $panier->produits()->attach($produit);
 }

 return response()->json(['message' => 'Produit ajouté au panier avec succès'], 200);
}





 public function deleteFromCart($id_user, $id_article)
    {
        $panier = Panier::where('user_id', '=', $id_user)->first();
        $article = Produit::find($id_article);
        $article_paniers = DB::table('article_panier')->get();
        
        if (count($article_paniers) == 0) {
            return \response()->json(['message' => 'Cart is empty']);
        } else {
            foreach ($article_paniers as $article_panier) {
                if ($article_panier->panier_id == $panier->id) {
                    if ($article_panier->article_id == $id_article) {
                        if ($article_panier->quantite > 1) {
                            $article_panier->quantite--;
                            $article_panier->prix -= $article->prixUnitaire;
                            $panier->prixItems -= $article->prixUnitaire;
                            $panier->qteItems--;
                            $panier->save();
                            DB::table('panier_produit')->where('id', '=', $article_panier->id)->update(['quantite' => ($article_panier->quantite), 'prix' => ($article_panier->prix)]);
                            return \response()->json(['message' => 'Product deleted from cart']);
                        } else {
                            DB::table('panier_produit')->where('id', '=', $article_panier->id)->delete();
                            $panier->prixItems -= $article->prixUnitaire;
                            $panier->qteItems--;
                            $panier->save();
                            return \response()->json(['message' => 'Product deleted from cart']);
                        }
                    }
                }
            }
            return \response()->json(['message' => 'Cart is empty']);
        }
    }
    public function deleteAllArticles($id_user) {
        $panier = Panier::where('user_id', '=', $id_user)->first();
        $article_paniers = DB::table('article_panier')->get();
        $panier->prixItems = 0;
        $panier->qteItems = 0;
        $panier->save();
        if (count($article_paniers) == 0) {
            return \response()->json(['message' => 'Cart is empty']);
        } else {
            foreach ($article_paniers as $article_panier) {
                if ($article_panier->panier_id == $panier->id) {
                    $article = Produit::find($article_panier->article_id);
                    $panier->articles()->detach($article);
                }
            }
            return \response()->json(['message' => 'Delete All From Cart']);
        }
    }

    public function getPrixItems($id_user)
    {
        $panier = Panier::where('user_id', '=', $id_user)->first();
    
        if (!$panier) {
            return response()->json(['error' => 'Aucun panier trouvé pour cet utilisateur.'], 404);
        }
    
        $ttc = $panier->prixItems;
        return response()->json(['ttc' => $ttc]);
    }
    
}
