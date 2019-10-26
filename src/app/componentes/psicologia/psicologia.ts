import { Component, OnInit } from '@angular/core';
import { psicologia } from 'src/app/datosapi/datosapi.models';
import { ApirestService } from '../../servicios/apirest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-psicologia',
  templateUrl: './psicologia.html',
  styleUrls: ['./psicologia.scss'],
})
export class PsicologiaPage implements OnInit {

  errorMessage: string = '';
  successMessage: string = '';
  psicologia: psicologia = new psicologia();

  constructor(
    private apiRest: ApirestService,
    private route: Router
  ) { }

  goAgregarpsicologia(){
    this.apiRest.doAgregarpsicologia(this.psicologia).subscribe(res => {
      console.log("llego hasta aqui")
      this.route.navigateByUrl("/verpsicologia");
      alert('Se ha creado la ficha de psicología exitosamente');
    }, err => {
     alert( "No se ha logrado registrar");
     
    })
  }

  back(){
    this.route.navigateByUrl("/datospaciente");
  }

  ngOnInit() {}

}
