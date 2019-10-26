import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { UserPage } from '../user/user';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import {FormBuilder} from '@angular/forms';
import{Storage} from '@ionic/storage'
import { storage } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage implements OnInit  {

  email: string;
  password: string;
  errorMessage: string = '';
  

  constructor(

    private authService: AuthService,
    public navCtrl: NavController,
    public route: Router,
    private storage : Storage
    ){}
   

  ngOnInit() {
    this.storage.clear()
  }
 
  tryLogin() {
    this.authService.doLogin(this.email, this.password)
    .then(res => {console.log('estas en la funcion INTENTAR INICIAR SESION'  + res);
    this.route.navigateByUrl("/user");
  }, err => {
    alert ("Usted no se encuentra registrado. En caso que si, verifique su email o contraseña");
      })  
  }
 
  goRegisterPage(){
    console.log('estas en la funcion REGISTRARSE');
    this.route.navigateByUrl("/register");
  }
  
}
