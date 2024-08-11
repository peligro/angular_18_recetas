import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../componentes/header/header.component';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { RecetaService } from '../../servicios/receta.service';
import { RecetaInterface } from '../../interfaces/receta-interface';
declare var jQuery: any

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './panel.component.html',
  styles: ``
})
export class PanelComponent implements OnInit {
  datos!:RecetaInterface[];
  constructor(private recetaService:RecetaService)
  {

  }
  ngOnInit(): void {
    this.hacerPeticion();
  }
  hacerPeticion()
  {
    this.recetaService.getDatosPanel().subscribe(
      {
        next:data=>
        {
          this.datos=data;

        },
        error:error=>
        {
          localStorage.clear();
          window.location.href="/login";
        }

      });
  }
  eliminar(id:any)
  {
  if(window.confirm("¿Realmente desea eliminar este registro?"))
  {
    this.recetaService.deleteData(parseInt(id)).subscribe(
      {
        next:data=>
        {
          alert("se eliminó el registro exitosamente");

        },
        error:error=>
        {
          alert("Ocurrió un error inesperado, por favor inténtelo más tarde");
        }
      });
      setInterval(() => {
        window.location.href = "/panel";
      }, 2000);
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
