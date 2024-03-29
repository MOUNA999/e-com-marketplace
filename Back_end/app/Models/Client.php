<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    public $timestamps=false;
    protected $table = 'users';

    protected $primaryKey = 'id';
    
    protected $fillable = ['name', 'email', 'status','email_verified_at', 'password'];
}
