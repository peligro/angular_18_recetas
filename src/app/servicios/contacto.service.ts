import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { ContactoInterface } from '../interfaces/contacto-interface';
@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private _http:HttpClient) { }

  sendData(modelo: ContactoInterface ): Observable<any> {

    return this._http.post(`${environment.api}contacto`, modelo,  { 'headers': {'content-type': 'application/json' } });
  }
}
