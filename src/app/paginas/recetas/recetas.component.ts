import { Component, inject, OnInit } from '@angular/core';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { HeaderComponent } from '../../componentes/header/header.component';
import { HomeStateService } from '../../servicios/home-state.service';
import { RecetaStateService } from '../../servicios/receta-state.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriasService } from '../../servicios/categorias.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './recetas.component.html',
  styles: ``
})
export class RecetasComponent implements OnInit {
  datos=inject(RecetaStateService);
  categorias!: Array<any>;
  page=1;
  paginacion=6;
  modelo: any;
  constructor( private route: ActivatedRoute, private categoriasService:CategoriasService)
  {
    let params: any = this.route.snapshot.queryParams;
    this.page = parseInt( (params.page) ? params.page:1 );
    this.modelo =
    {
      categoria_id: "0",
      search:""
    };
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
  enviar()
  {
    //console.log(`categoria_id=${this.modelo.categoria_id} | search=${this.modelo.search}`);
    if(this.modelo.categoria_id=='0')
    {
      return false;
    }
    window.location.href="/recetas-resultados?categoria_id="+this.modelo.categoria_id+"&search="+this.modelo.search;
    return true;
  }
}
