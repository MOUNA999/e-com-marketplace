<?php

namespace App\Http\Controllers;

use App\Models\Produit;
use App\Models\Categorie;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\View\View;
use Illuminate\Support\Facades\DB;
class ProduitController extends Controller
{

    public function getProduit(){
        return response()->json(Produit::all(),200);
    }

    public function getOneArticle($id){
        $article = Produit::find($id);
        
        if (is_null($article)) {
            return \response()->json(['message' => 'Article Not Found'], 404);
        }
    
        $categorie = Categorie::find($article->categorie_id);
        
        $responce = [
            'article' => $article,
            'categorie' => $categorie
        ];
        
        return \response()->json($responce, 200);
    }
    

    public function addProduit(Request $request) {
        // Vérifiez si toutes les données requises sont présentes
        if (!$request->has('nom') || !$request->has('reference') || !$request->has('prix') || !$request->has('image') || !$request->has('qt_stock') || !$request->has('dimension')) {
            return response()->json(['message' => 'Missing required fields'], 400);
        }
    
        // Créez le produit en utilisant les données de la requête
        $produit = new Produit;
        $produit->nom = $request->input('nom');
        $produit->reference = $request->input('reference');
        $produit->prix = $request->input('prix');
        $produit->image = $request->input('image');
        $produit->qt_stock = $request->input('qt_stock');
        $produit->dimension = $request->input('dimension');
        $produit->categorie_id = $request['categorie_id'];
        $produit->save();
    
        // Retournez la réponse appropriée
        return response()->json($produit, 201);
    }
  
    
    public function updateProduit(Request $request, $id){
        $prod = Produit::find($id);
    
        if (is_null($prod)) {
            return response()->json(['message' => 'Product not found'], 404);
        }
    
        $prod->update($request->all());
    
        // Ajoutez cette ligne pour retourner le produit mis à jour
        return response()->json($prod, 200);
    }
     
    public function deleteProduit(Request $request, $id){
            $prod=Produit::find($id);
            if(is_null($prod)){
                return response()->json(['message'=>'product not found'],404);
            }
        $prod->delete();
        return response()->json(null,204);

    }    


    public function index()
{
    $products = Produit::all();
    return response()->json($products);
}

public function saveImage(Request $request){
    if($request->hasFile('image')){
        $imageNameComplete = $request->file('image')->getClientOriginalName();
        $imageNameOnly = \pathinfo( $imageNameComplete, \PATHINFO_FILENAME);
        $image_name = $imageNameOnly . "." . $request->file('image')->getClientOriginalExtension();
        $path = 'images/articles';
        $request->file('image')->move($path, $image_name);
    }
}
    } 

