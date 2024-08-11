import { Component } from '@angular/core';
import { LoginService } from '../../servicios/login.service';
import { HeaderComponent } from '../../componentes/header/header.component';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  modelo:any;
  boton:any;
  constructor(private loginService:LoginService )
  {
    this.modelo =
    {
      nombre: "",
      correo:"",
      password:""
    };
    this.boton=0;
  }
  enviar()
  {
    this.boton=1;
    this.loginService.sendData({correo:this.modelo.correo, password: this.modelo.password}).subscribe({
      next:data=>
      {
        localStorage.setItem("recetas_flaites_id", data.id);
        localStorage.setItem("recetas_flaites_nombre", data.nombre);
        localStorage.setItem("recetas_flaites_token", data.token);

        setInterval(() => {
          window.location.href = "/panel";
        }, 2000);
      },
      error:error=>
      {
        alert("Ocurrió un error inesperado");
        setInterval(() => {
          window.location.href = "/login";
        }, 2000);
      }
    });
  }
}
