<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTExceptions;
use Illuminate\Support\Facades\Auth;
class UserController extends Controller
{
    public function inscription(Request $request){
       
        $user = User::where('email', $request['email'])->first();

        if($user){
            $response['status']=0;
            $response['message'] ='Email Already exist';
            $response['code'] = 409;
             return response()->json($response);
            
        }
        else {
        // Créez un nouveau user avec les données fournies dans la requête
        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' =>bcrypt($request->password), // Enregistrez le mot de passe crypté
        ]);
        $response['status']=1;
        $response['message'] ='User registered successfully';
        $response['code'] = 200;
        return response()->json($response);

              }

        // return response()->json($response);
        
    }
    public function connexion(Request $request){

        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        // Check email
        $user = User::where('email', $fields['email'])->first();

        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return \response()->json([
                'message' => 'Email or password is incorrect.',
                'status' => 0

            ]);
        }
        $token = $user->createToken('myapptoken')->plainTextToken;
        $responce = [
            'user' => $user,
            'token' => $token,
            'status' => 1
        ];
        return \response()->json($responce, 200);
        }

        public function getUsers(){
            return response()->json(User::all());
        }
}
