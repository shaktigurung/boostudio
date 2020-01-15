<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class logincontroller extends Controller
{
    //
    public function login(Request $request)
    {
        if (auth()->attempt(request(['email', 'password'])) == false) {
            return response()->json(['sucess' => false, 'message' => 'The email or password is incorrect, please try again']);
        } else {
            $intended_url = redirect()->intended('/optus/dashboard')->getTargetUrl();
            return response()->json(['sucess' => true, 'redirect' => $intended_url]);
        }
    }
    public function register(Request $request)
    {
        $this->validate(request(), [
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email|unique:mysql.users',
            'password' => 'required'
        ]);
        // request(['firstname', 'lastname', 'email', 'password'])
        $user = User::create(request(['firstname', 'lastname', 'email', 'password', 'phonenumber']));

        auth()->login($user);

        return response()->json(['sucess' => true]);
    }
}
