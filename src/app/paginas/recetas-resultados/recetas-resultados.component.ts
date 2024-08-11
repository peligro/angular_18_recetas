import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { HeaderComponent } from '../../componentes/header/header.component';
import { CategoriasService } from '../../servicios/categorias.service';
import { RecetaService } from '../../servicios/receta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recetas-resultados',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './recetas-resultados.component.html',
  styles: ``
})
export class RecetasResultadosComponent implements OnInit {
  datos!: Array<any>;
  categorias!: Array<any>;
  modelo: any;
  constructor(private route: ActivatedRoute, private categoriasService:CategoriasService, private recetaServide:RecetaService)
  {
    this.modelo =
    {
      categoria_id: "0",
      search:""
    };
  }

  ngOnInit(): void {
    let queryparams:any = this.route.snapshot.queryParams;
    this.hacerPeticion(queryparams.categoria_id, queryparams.search);
  }
  hacerPeticion(categoria_id:any, search:any)
  {
    this.recetaServide.getDatosSearch(categoria_id, search).subscribe(
      {
        next:data=>
        {
          this.datos = data
        },
        error:error=>
        {
          console.error('Error', error);
        }
      });
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
  enviar()
  {

  }
}
