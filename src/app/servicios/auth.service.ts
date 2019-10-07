import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private AFauth : AngularFireAuth
    ) {}

 
  doRegister(email: string, password: string){
    return new Promise<any>((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
   }

   doLogin(email: string, password: string){
    return new Promise<any>((resolve, reject) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
   }

   doLogout(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        this.AFauth.auth.signOut()
        resolve();
      }
      else {
        reject();
      }
    });
   }


}
