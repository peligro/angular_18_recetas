import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  metodoCerrarSesion()
  {
    if (confirm("¿Realmente desea cerrar la sesión?") == true) {
      localStorage.clear();
      window.location.href="/login";
    }
  }
  getId()
  {
    return localStorage.getItem('recetas_flaites_id');
  }
  getNombre()
  {
    return localStorage.getItem('recetas_flaites_nombre');
  }
  getToken()
  {
    return localStorage.getItem('recetas_flaites_token');
  }
}
