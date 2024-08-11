import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../componentes/header/header.component';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { RecetaService } from '../../servicios/receta.service';
import { ActivatedRoute } from '@angular/router';
import { RecetaInterface } from '../../interfaces/receta-interface';

@Component({
  selector: 'app-recetas-detalle',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './recetas-detalle.component.html',
  styles: ``
})
export class RecetasDetalleComponent implements OnInit{

  datos!:RecetaInterface;

  constructor( private route: ActivatedRoute, private recetaService:RecetaService){}

  ngOnInit(): void {
    let params:any = this.route.snapshot.params;
    this.hacerPeticion(params.slug);
  }
  hacerPeticion(slug:any)
  {
    this.recetaService.getDato(slug).subscribe(
      {
        next:data=>
        {
          this.datos = data;
        },
        error:error=>
        {
          window.location.href="/error";
        }
      });
  }
}
