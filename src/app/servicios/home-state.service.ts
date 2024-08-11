import { inject, Injectable } from '@angular/core';
import { signalSlice } from 'ngxtension/signal-slice';
import { HomeService } from './home.service';
import { RecetaInterface } from '../interfaces/receta-interface';
import {    catchError, map, Observable, of, switchMap   } from 'rxjs';

interface State
{
  //datos: Array<any>,
  datos: RecetaInterface[],
  status: 'loading' | 'success' | 'error'
};


@Injectable({
  providedIn: 'root'
})
export class HomeStateService {

  private servicio = inject(HomeService);

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
        this.servicio.getDatos().pipe
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
