<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class MustBeAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
        public function handle(Request $request, Closure $next)
        {
          if (Auth::check() && Auth::user()->status == 1) {
            return redirect()->route('admin.dashboard'); // Rediriger vers la vue login.admin
        }

      // Si la colonne status n'est pas égale à 1 ou si l'utilisateur n'est pas authentifié
      // Rediriger vers la vue login.home
      return redirect()->route('login.home');
  }
    }

