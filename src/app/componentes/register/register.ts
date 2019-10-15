import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { FormGroup, FormControl } from '@angular/forms';
import {LoginPage} from '../login/login';
import { UserPage } from '../user/user';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class RegisterPage  {
  nombre: string;
  rut: string;
  email: string;
  password: string;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private authService: AuthService,
    public navCtrl: NavController,
    public route: Router
  ) {}

  tryRegister(){
    this.authService.doRegister(this.nombre, this.rut, this.email, this.password)
     .then(res => {
       this.successMessage = "Se ha creado su cuenta exitosamente";
     }, err => {
      this.errorMessage = "No se ha logrado registrar su cuenta";
     })
  }

  goLogin(){
    console.log('estas en la funcion VOLVER A iniciar sesion');
    this.route.navigateByUrl("/login");
  }
  ngOnInit() {}

}
