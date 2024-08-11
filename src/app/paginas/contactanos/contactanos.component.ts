import { Component } from '@angular/core';
import { HeaderComponent } from '../../componentes/header/header.component';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ContactoService } from '../../servicios/contacto.service';

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './contactanos.component.html',
  styles: ``
})
export class ContactanosComponent {
  modelo:any;
  boton:any;
  constructor(private contactoService:ContactoService)
  {
    this.modelo =
    {
      nombre: "",
      correo:"",
      telefono:"",
      mensaje:""
    };
    this.boton=0;
  }
  enviar()
  {
    this.boton=1;
    this.contactoService.sendData({nombre:this.modelo.nombre, telefono:this.modelo.telefono, correo:this.modelo.correo, mensaje: this.modelo.mensaje}).subscribe({
      next:data=>
      {
        alert("se envía mensaje exitosamente");
        setInterval(() => {
          window.location.href = "/contactanos";
        }, 2000);
      },
      error:error=>
      {
        console.log('Error: ' + error.message);
      }
    });
  }
}
