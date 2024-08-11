import { Component } from '@angular/core';
import { HeaderComponent } from '../../componentes/header/header.component';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RegistroService } from '../../servicios/registro.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './registro.component.html',
  styles: ``
})
export class RegistroComponent {
  modelo:any;
  boton:any;
  constructor(private registroService:RegistroService )
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
    this.registroService.sendData({nombre:this.modelo.nombre, correo:this.modelo.correo, password: this.modelo.password}).subscribe({
      next:data=>
      {
        alert("Te haz registrado exitosamente\nTe hemos enviado un email para activar tu cuenta");
        setInterval(() => {
          window.location.href = "/registro";
        }, 2000);
      },
      error:error=>
      {
        console.log('Error: ' + error.message);
      }
    });
  }
}
