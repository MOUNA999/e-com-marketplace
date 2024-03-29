@extends('produits.layout')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                
                <div class="card-header"><h1>Liste des Produits</h1></div>
                <div class="card-body">
                        <a href="{{ url('/produits/create') }}" class="btn btn-success btn-sm" title="Add New Student">
                            <i class="fa fa-plus" aria-hidden="true"></i> Add New
                        </a>
                        <br/>
                        <br/>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nom</th>
                                <th>Référence</th>
                                <th>Prix</th>
                                <th>Image</th>
                                <th>Quantité en Stock</th>
                                <th>Dimension</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($produits as $produit)
                            <tr>
                                <td>{{ $produit->id_prod }}</td>
                                <td>{{ $produit->nom }}</td>
                                <td>{{ $produit->référence }}</td>
                                <td>{{ $produit->prix }}</td>
                                <td>{{ $produit->image }}</td>
                                <td>{{ $produit->qt_stock }}</td>
                                <td>{{ $produit->dimension }}</td>
                                <td>
                                <a href="{{ route('produits.show', ['produit' => $produit->id_prod]) }}" title="View Produit">
    <button class="btn btn-info btn-sm"><i class="fa fa-eye" aria-hidden="true"></i> View</button>
</a>
                                    <a href="{{ route('produits.edit', $produit->id_prod) }}" class="btn btn-secondary">Edit</a>
                                    <form action="{{ route('produits.destroy', $produit->id_prod) }}" method="POST" style="display: inline-block;">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger" onclick="return confirm('Voulez-vous vraiment supprimer ce produit ?')">Destroy</button>
                                    </form>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
