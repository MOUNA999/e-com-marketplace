<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PanierController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('produit/get', [ProduitController::class, 'getProduit']);
Route::get('article/{id}', [ProduitController::class, 'getOneArticle']);
Route::post('produit/post', [ProduitController::class, 'addProduit']);
Route::put('produit/update/{id}', [ProduitController::class, 'updateProduit']);
Route::post('saveimage', [ProduitController::class, 'saveImage']);
Route::delete('produit/delete/{id}', [ProduitController::class, 'deleteProduit']);

Route::get('products', [ProduitController::class, 'index']);

// Authentification  -----Début------
Route::get('/', [RegisterController::class, 'create']);
Route::post('/register', [RegisterController::class, 'store'])->name('register');
Route::post('/login', [LoginController::class, 'login']);
Route::post('/check', [LoginController::class, 'check'])->name('check');
Route::get('/client', [LoginController::class, 'getClient']);


//table user
Route::post('inscription', [UserController::class, 'inscription']);
Route::post('connexion', [UserController::class, 'connexion']);
Route::get('api/getUsers', [UserController::class, 'getUsers']);
// Authentification  -----Fin------


// Panier
Route::get('panier/{usedid}', [PanierController::class, 'getCart']);
Route::get('addtopanier/{userid}/{produitid}', [PanierController::class, 'addToCart']);
Route::delete('deletefrompanier/{userid}/{produitid}', [PanierController::class, 'deleteFromCart']);
Route::delete('deleteall/{userid}', [PanierController::class, 'deleteAllArticles']);
Route::get('getttc/{userid}', [PanierController::class, 'getPrixItems']);


// Categorie
Route::get('categories', [CategorieController::class, 'getCategories']);
Route::get('categorie/{id}', [CategorieController::class, 'getOneCategorie']);
Route::post('addcategorie', [CategorieController::class, 'addCategorie']);
Route::put('updatecategorie/{id}', [CategorieController::class, 'updateCategorie']);
Route::delete('deletecategorie/{id}', [CategorieController::class, 'deleteCategorie']);

