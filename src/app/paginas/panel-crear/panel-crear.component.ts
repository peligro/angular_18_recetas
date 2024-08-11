import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../componentes/header/header.component';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RecetaService } from '../../servicios/receta.service';
import { CategoriasService } from '../../servicios/categorias.service';

@Component({
  selector: 'app-panel-crear',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './panel-crear.component.html',
  styles: ``
})
export class PanelCrearComponent implements OnInit {
  categorias!: Array<any>;
  modelo:any;
  boton:any;
  constructor(private recetaService:RecetaService, private categoriasService:CategoriasService)
  {
    this.modelo =
    {
      categoria_id:"0",
      nombre: "",
      tiempo:"",
      detalle:"",
      foto:""
    };
    this.boton=0;
  }
  ngOnInit(): void {
    this.hacerPeticion();
  }
  hacerPeticion()
  {
    this.categoriasService.getDatos().subscribe(
      {
        next:data=>
        {
          this.categorias = data
        },
        error:error=>
        {
          console.error('Error', error);
        }
      });
  }
  archivo!: File;
  onFilechange(event: any) {
    this.archivo = event.target.files[0];
  }
  enviar( )
  {
    this.boton=1;

    //console.log(file2);return false;
    let file = this.modelo.foto;
    const extension = file.split('.');
    let largo = extension.length-1;
    if (extension[largo] == 'png' || extension[largo] == 'jpg' || extension[largo] == 'jpeg')
    {
      this.recetaService.sendData({nombre:this.modelo.nombre, categoria_id:this.modelo.categoria_id, tiempo:this.modelo.tiempo, detalle: this.modelo.detalle, foto:this.archivo}).subscribe({
        next:data=>
        {
          alert("se envía mensaje exitosamente");
          setInterval(() => {
            window.location.href = "/panel-crear";
          }, 2000);
        },
        error:error=>
        {
          alert("Ocurrió un error inesperado por favor vuelta a intentarlo más tarde");
          setInterval(() => {
            window.location.href = "/panel-crear";
          }, 2000);
        }
      });
    }else
    {
      alert("La foto debe ser JPG o PNG");
      window.location.href="/panel-crear";
    }
  }

}
