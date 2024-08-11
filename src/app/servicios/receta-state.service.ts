import { inject, Injectable } from '@angular/core';
import { signalSlice } from 'ngxtension/signal-slice';
import { RecetaInterface } from '../interfaces/receta-interface';
import {    catchError, map, Observable, of, switchMap   } from 'rxjs';
import { RecetaService } from './receta.service';
import { ActivatedRoute } from '@angular/router';
interface State
{
  datos: Array<any>,
  //datos: RecetaInterface[],
  status: 'loading' | 'success' | 'error'
};
@Injectable({
  providedIn: 'root'
})
export class RecetaStateService {

  private servicio = inject(RecetaService);

  //listar
  private initialState:State=
  {
    datos:[],
    status:'loading' as const
  };


  state =signalSlice(
    {
      initialState:this.initialState,
      sources:[
        this.servicio.getDatos( ).pipe
        (
          map((datos)=>({datos, status: 'success' as const})),
          catchError(()=>
            {
              return of({
                datos:[],
                status: 'error' as const,
              })
            })
        )
      ]
    });
}
