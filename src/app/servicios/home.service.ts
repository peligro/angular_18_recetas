import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http:HttpClient) { }

  getDatos():Observable<any>
  {
    return this._http.get(`${environment.api }recetas-home`, {'headers': {'content-type': 'application/json' }});
  }
}
