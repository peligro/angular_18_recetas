import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';
import { RecetaRequest } from '../interfaces/receta-request';
import { RecetaUpdate } from '../interfaces/receta-update';
import { RecetaRequestFoto } from '../interfaces/receta-request-foto';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  page=1;
  constructor(private _http:HttpClient, private route: ActivatedRoute, private authService:AuthService)
  {

    let queryparams: any = this.route.snapshot.queryParams;
    this.page = parseInt( (queryparams.page) ? queryparams.page:1 );
   }


  getDatos( ):Observable<any>
  {
    return this._http.get(`${environment.api }recetas?page=${this.page}`, {'headers': {'content-type': 'application/json' }});
  }
  getDatosSearch(categoria_id:any, search:any):Observable<any>
  {
    return this._http.get(`${environment.api }recetas-search?categoria_id=${categoria_id}&search=${search}`, {'headers': {'content-type': 'application/json' }});
  }
  getDato(slug:any):Observable<any>
  {
    return this._http.get(`${environment.api }recetas/${slug}`, {'headers': {'content-type': 'application/json' }});
  }
  getDatosPanel( ):Observable<any>
  {
    return this._http.get(`${environment.api }api/recetas-panel`, {'headers': { 'content-type': 'application/json' ,'X-AUTH-TOKEN':''+this.authService.getToken() }});
  }
  sendData(modelo: RecetaRequest ): Observable<any>
  {
    let formData = new FormData();
    formData.append('foto', modelo.foto);
    formData.append('categoria_id', modelo.categoria_id+"");
    formData.append('nombre', modelo.nombre);
    formData.append('detalle', modelo.detalle);
    formData.append('tiempo', modelo.tiempo);

    return this._http.post(`${environment.api}api/recetas`, formData,  { 'headers': { 'X-AUTH-TOKEN':''+this.authService.getToken()  } });
  }
  editData(modelo: RecetaUpdate, id:any): Observable<any>
  {

    return this._http.put(`${environment.api}api/recetas/${id}`, modelo,  { 'headers': {'content-type': 'application/json', 'X-AUTH-TOKEN':''+this.authService.getToken()} });
  }
  deleteData(id: any): Observable<any>
  {
    return this._http.delete(`${environment.api}api/recetas/${id}`,  { 'headers': {'content-type': 'application/json', 'X-AUTH-TOKEN':''+this.authService.getToken()} });
  }
  sendDataFoto(modelo: RecetaRequestFoto ): Observable<any>
  {
    let formData = new FormData();
    formData.append('foto', modelo.foto);
    formData.append('id', modelo.id+"");

    return this._http.post(`${environment.api}api/recetas-fotos`, formData,  { 'headers': { 'X-AUTH-TOKEN':''+this.authService.getToken()  } });
  }
}
