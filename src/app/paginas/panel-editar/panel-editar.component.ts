import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../componentes/header/header.component';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RecetaService } from '../../servicios/receta.service';
import { CategoriasService } from '../../servicios/categorias.service';
import { RecetaInterface } from '../../interfaces/receta-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-panel-editar',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './panel-editar.component.html',
  styles: ``
})
export class PanelEditarComponent implements OnInit {
  categorias!: Array<any>;
  receta!:RecetaInterface;
  modelo:any;
  boton:any;
  private route = inject(ActivatedRoute);
  private recetaService=inject(RecetaService);
  private categoriasService=inject(CategoriasService);

  ngOnInit(): void {
    this.modelo =
    {
      categoria_id:"0",
      nombre: "",
      tiempo:"",
      detalle:""
    };
    this.boton=0;
    let params:any = this.route.snapshot.params;
    this.hacerPeticion(params.id);
  }
  hacerPeticion(slug:any)
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
    this.recetaService.getDato(slug).subscribe(
      {
        next:data=>
        {
          this.receta=data;
          this.modelo =
          {
            categoria_id:this.receta.categoria_id,
            nombre: this.receta.nombre,
            tiempo:this.receta.tiempo,
            detalle:this.receta.detalle
          };
        },
        error:error=>
        {
          window.location.href="/error";
        }
      });
  }
  enviar( )
  {
    this.boton=1;
    this.recetaService.editData({nombre:this.modelo.nombre, categoria_id:parseInt(this.modelo.categoria_id), tiempo:this.modelo.tiempo, detalle: this.modelo.detalle }, this.receta.id).subscribe({
      next:data=>
      {
        alert("se modificó el registro exitosamente");
        setInterval(() => {
          window.location.href = "/panel";
        }, 2000);
      },
      error:error=>
      {
        alert("Ocurrió un error inesperado por favor vuelta a intentarlo más tarde");
        setInterval(() => {
          window.location.href = "/panel";
        }, 2000);
      }
    });
  }
}
