<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Facade;
use Hash;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin', ['except' => ['create']]);
    }

    public function index()
    {
    	return view('login.admin');
    }

    public function create()
    {
    	$user = new User;
		$user->create([
			'name' => 'ketata',
			'email' => 'ketatamouna000@gmail.com',
			'password' => bcrypt('password'),
			'admin' => true
		]);

		$newUser = new User;
		$newUser->name = 'ketata';
		$newUser->email = 'ketatamouna000@gmail.com';
		$newUser->password = bcrypt('password');
		$newUser->admin = false;
		$newUser->save();

		return 'generated dummy users';
    }
}
