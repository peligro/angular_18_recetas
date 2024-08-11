import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { RegistroInterface } from '../interfaces/registro-interface';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private _http:HttpClient) { }

  sendData(modelo: RegistroInterface ): Observable<any> {

    return this._http.post(`${environment.api}auth/registro`, modelo,  { 'headers': {'content-type': 'application/json' } });
  }
}
