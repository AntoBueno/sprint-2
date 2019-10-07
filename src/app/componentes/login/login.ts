import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { UserPage } from '../user/user';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage  {

  email: string;
  password: string;
  errorMessage: string = '';
  

  constructor(

    private authService: AuthService,
    public navCtrl: NavController,
    public route: Router
    ){}
   

  ngOnInit() {
  }
 
  tryLogin() {
    this.authService.doLogin(this.email, this.password)
    .then(res => {console.log('estas en la funcion'  + res);
    this.route.navigateByUrl("/user");
  }, err => {
    console.log('error' + err);
    this.errorMessage = "Usted no se encuentra registrado. En caso que si, verifique su email o contraseña";
      })  
  }
 
  goRegisterPage(){
    console.log('estas en la funcion2');
    this.route.navigateByUrl("/register");
  }
  
}
