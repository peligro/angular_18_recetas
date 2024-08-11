import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, GuardResult, MaybeAsync, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild , CanLoad  {

  constructor() {}


  canLoad(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    throw new Error('Method not implemented.');
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    throw new Error('Method not implemented.');
  }

  canActivate(): boolean {
    if(localStorage.getItem('recetas_flaites_token')===null)
      {
        window.location.href="/login";
        return false;
      }else
      {
        return true;
      }

  }





}
