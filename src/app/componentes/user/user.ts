import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrls: ['./user.scss'],
})
export class UserPage {

  constructor() { }

  ngOnInit() {}

}
