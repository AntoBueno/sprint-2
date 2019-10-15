import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { realpathSync } from 'fs';
import {AngularFireAuth} from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WardGuard implements CanActivate {
 
  constructor(
    
   private AFauth : AngularFireAuth,
   private route: Router
    ){}
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    Observable<boolean> | Promise<boolean>  | boolean {
     return this.AFauth.authState.pipe(map( auth => {
      if(isNullOrUndefined(auth)){
        this.route.navigateByUrl("/login");
        return false;
      } else{
        return true;
      } 
      //console.log(auth);
        //return false;
      }))
    }
}
