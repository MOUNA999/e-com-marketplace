<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    public $timestamps=false;

    protected $primaryKey = 'id_prod';
    protected $fillable =['nom','reference','prix','image','qt_stock','dimension'] ;


    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function paniers()
    {
        return $this->belongsToMany(Panier::class, 'panier_produit', 'produit_id', 'panier_id');
    }
}
