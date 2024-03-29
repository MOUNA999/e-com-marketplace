<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    
    public function check(Request $request)
    {

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
          public function login(Request $request)
          {
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
       
    public function getClient(){
        return response()->json(User::all(),200);
    }
    public function logout()
    {
        $user = auth()->user();
        $user()->tokens()->delete();
        return \response()->json(['message' => 'Logout']);
    }
    public function allUsers()
    {
        $users = User::all();
        return response()->json(['users' => $users]);
    }

}
