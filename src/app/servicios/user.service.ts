import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/toPromise';
import { FirebaseUserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().onAuthStateChanged(function(user){
        let userModel = new FirebaseUserModel();
        if (user) {
          if(user.providerData[0].providerId == 'password'){
            
            userModel.nombre = user.displayName;
            userModel.provider = user.providerData[0].providerId;
            return resolve(userModel);
          }
          else{
            userModel.nombre = user.displayName;
            userModel.provider = user.providerData[0].providerId;
            return resolve(userModel);
          }
        } else {
          reject('No se ha iniciado sesión');
        }
      })
    })
  }
}

