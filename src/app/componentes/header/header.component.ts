import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent implements OnInit {
  nombre:any;
  logueado!:boolean;
  constructor(private authService:AuthService){}

  ngOnInit(): void {
    if(localStorage.getItem('recetas_flaites_token')===null)
    {
      this.logueado=false;
      this.nombre='';
    }else
    {
      this.logueado=true;
      this.nombre=this.authService.getNombre();
    }

  }
  salir()
  {
    this.authService.metodoCerrarSesion();
  }
}
