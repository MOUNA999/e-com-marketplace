<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Panier extends Model
{
    use HasFactory;
    public $timestamps = false; // Désactiver les horodatages
    protected $fillable = [
        'qteItems',
        'prixItems',
        'user_id'
    ];

    public function produits()
    {
        return $this->belongsToMany(Produit::class);
    }


    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
}
