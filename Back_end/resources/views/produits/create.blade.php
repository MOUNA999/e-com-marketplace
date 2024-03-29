@extends('produits.layout')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Créer un Nouveau Produit</div>

                <div class="card-body">
                    <form action="{{ route('produits.store') }}" method="POST">
                        @csrf
                        <div class="form-group">
                            <label for="nom">Nom:</label>
                            <input type="text" class="form-control" id="nom" name="nom">
                        </div>
                        <div class="form-group">
                            <label for="reference">Référence:</label>
                            <input type="text" class="form-control" id="référence" name="référence">
                        </div>
                        <div class="form-group">
                            <label for="prix">Prix:</label>
                            <input type="text" class="form-control" id="prix" name="prix">
                        </div>

                        <div class="form-group">
                            <label for="prix">Image:</label>
                            <input type="text" class="form-control" id="image" name="image">
                        </div>

                        <div class="form-group">
                            <label for="prix">Quantité en Stock:</label>
                            <input type="text" class="form-control" id="qt_stock" name="qt_stock">
                        </div>

                        <div class="form-group">
                            <label for="prix">Dimension:</label>
                            <input type="text" class="form-control" id="dimension" name="dimension">
                        </div>
                        <input type="submit" value="Add" class="btn btn-success"></br>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
