@extends('produits.layout')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Modifier le Produit</div>

                <div class="card-body">
                <form method="POST" action="{{ route('produits.update', ['produit' => $produit->id_prod]) }}">
                        @csrf
                        @method('PUT')
                        <div class="form-group">
                            <label for="nom">Nom:</label>
                            <input type="text" class="form-control" id="nom" name="nom" value="{{ $produit->nom }}">
                        </div>
                        <div class="form-group">
                            <label for="reference">Référence:</label>
                            <input type="text" class="form-control" id="référence" name="référence" value="{{ $produit->référence }}">
                        </div>
                        <div class="form-group">
                            <label for="prix">Prix:</label>
                            <input type="text" class="form-control" id="prix" name="prix" value="{{ $produit->prix }}">
                        </div>

                        <div class="form-group">
                            <label for="prix">Image:</label>
                            <input type="text" class="form-control" id="image" name="image" value="{{ $produit->image }}">
                        </div>

                        <div class="form-group">
                            <label for="prix">Quantité en Stock:</label>
                            <input type="text" class="form-control" id="qt_stock" name="qt_stock" value="{{ $produit->qt_stock }}">
                        </div>

                        <div class="form-group">
                            <label for="prix">Dimension:</label>
                            <input type="text" class="form-control" id="dimension" name="dimension" value="{{ $produit->dimension }}">
                        </div>
                        <input type="submit" value="Update" class="btn btn-success"></br>
                        <!-- Ajoutez ici d'autres champs du formulaire si nécessaire -->

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

