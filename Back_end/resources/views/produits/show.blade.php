@extends('produits.layout')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Détails du Produit</div>

                <div class="card-body">
                    <p><strong>Nom:</strong> {{ $produit->nom }}</p>
                    <p><strong>Référence:</strong> {{ $produit->référence }}</p>
                    <p><strong>Prix:</strong> {{ $produit->prix }}</p>
                    <p><strong>Image:</strong> {{ $produit->image }}</p>
                    <p><strong>Quantité en Stock:</strong> {{ $produit->qt_stock }}</p>
                    <p><strong>Dimension:</strong> {{ $produit->dimension }}</p>
                    <!-- Ajoutez ici d'autres détails du produit si nécessaire -->
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
