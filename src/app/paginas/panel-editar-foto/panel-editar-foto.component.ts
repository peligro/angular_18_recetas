import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { HeaderComponent } from '../../componentes/header/header.component';
import { RecetaInterface } from '../../interfaces/receta-interface';
import { ActivatedRoute } from '@angular/router';
import { RecetaService } from '../../servicios/receta.service';
declare var jQuery: any
@Component({
  selector: 'app-panel-editar-foto',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './panel-editar-foto.component.html',
  styles: ``
})
export class PanelEditarFotoComponent {

  receta!:RecetaInterface;
  modelo:any;
  boton:any;
  private route = inject(ActivatedRoute);
  private recetaService=inject(RecetaService);

  ngOnInit(): void {
    this.modelo =
    {
      id:"0",
      foto:""
    };
    this.boton=0;
    let params:any = this.route.snapshot.params;
    this.hacerPeticion(params.id);
  }
  hacerPeticion(slug:any)
  {

    this.recetaService.getDato(slug).subscribe(
      {
        next:data=>
        {
          this.receta=data;
          this.modelo =
          {
            id:this.receta.id,
          };
        },
        error:error=>
        {
          window.location.href="/error";
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
    let file = this.modelo.foto;
    const extension = file.split('.');
    let largo = extension.length-1;
    if (extension[largo] == 'png' || extension[largo] == 'jpg' || extension[largo] == 'jpeg')
    {
      this.recetaService.sendDataFoto({id:this.modelo.id, foto:this.archivo}).subscribe({
        next:data=>
        {
          alert("se modificó el registro exitosamente");
          setInterval(() => {
            window.location.href = location.href;
          }, 2000);
        },
        error:error=>
        {
          alert("Ocurrió un error inesperado por favor vuelta a intentarlo más tarde");
          setInterval(() => {
            window.location.href = location.href;
          }, 2000);
        }
      });
    }else
    {
      alert("La foto debe ser JPG o PNG");
      window.location.href=location.href;
    }
  }
   //##########FANCYBOX
   ngAfterViewInit() {
    jQuery(document).ready(function(){
         jQuery(".fancybox").fancybox({
             openEffect: "elastic",
             closeEffect: "none"
         });
     });
  }
ngOnDestroy() {
  jQuery(".fancybox").unbind('click.fb');
}
}
