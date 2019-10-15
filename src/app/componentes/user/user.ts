import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import {FormBuilder} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { AngularFirestore} from "@angular/fire/firestore";
import { IonicStorageModule } from '@ionic/storage';

import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrls: ['./user.scss'],
})
export class UserPage {
 
  rutpaciente: string;
  codigo: string;
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private db: AngularFirestore,
    private storage: Storage
    
  ) {}
 
  ngOnInit() {
      var user =firebase.auth().currentUser
      var name, email, uid, rut, apellido, nombre;
      if (user != null) {
           name = user.displayName;
           email = user.email;
           uid = user.uid;
           console.log(email+" "+" "+uid)
         }
    }
    
  goBuscar(){
    console.log('estas en la funcion BUSCAR');
    console.log(this.codigo,this.rutpaciente)
    this.storage.set('name', this.rutpaciente)
    this.authService.doBuscar(this.rutpaciente,this.codigo)
}


  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.navCtrl.pop();
      console.log("Exito cierre de sesión", res);
    }, (err => {
      console.log("Error cierre de sesión", err);
    }));
  }

}
