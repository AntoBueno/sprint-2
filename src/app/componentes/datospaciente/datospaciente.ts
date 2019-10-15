import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from "../../servicios/auth.service";
import { from } from 'rxjs';
import {Router} from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { ApirestService } from '../../servicios/apirest.service';
import { codigo, kine } from '../../datosapi/datosapi.models';
import { AngularFirestore} from '@angular/fire/firestore';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-datospaciente',
  templateUrl: './datospaciente.html',
  styleUrls: ['./datospaciente.scss'],
})
export class DatospacientePage  {
 

  constructor(
    private authService: AuthService,
    public navCtrl: NavController,
    private route: Router,
    private apiService : ApirestService,  
    public actionSheetController: ActionSheetController,
    
  ){}
  
  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.navCtrl.pop();
      console.log("Exito cierre de sesión", res);
    }, (err => {
      console.log("Error cierre de sesión", err);
    }));
  }
  
  goAgregarinter(){
    this.route.navigateByUrl("/interconsulta");
  }

  goVerinter(){
    this.route.navigateByUrl('/verinterconsulta');
  }

  goAgregarfi(){
    this.route.navigateByUrl("/fichamedica");
  }

  goVerfi(){
    this.route.navigateByUrl("/verfichamedica");
            }

  goVerpsico(){
    this.route.navigateByUrl("/verpsicologia");
  }
}
//(click)="goVerFicha()"  (click)="goAgregarFicha()"  (click)="goVerInterconsulta()"