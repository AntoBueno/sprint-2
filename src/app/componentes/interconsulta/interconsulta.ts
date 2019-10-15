import { Component, OnInit } from '@angular/core';
import {interconsulta} from '../../datosapi/datosapi.models';
import { ApirestService } from '../../servicios/apirest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-interconsulta',
  templateUrl: './interconsulta.html',
  styleUrls: ['./interconsulta.scss'],
})
export class InterconsultaPage {
  
  errorMessage: string = '';
  successMessage: string = '';
  interconsulta: interconsulta = new interconsulta();

  constructor(

    private apiRest: ApirestService,
    private route: Router
  ) {}

  goAgregarInterconsulta(){
    this.apiRest.doAgregarInterconsulta(this.interconsulta).subscribe(res => {
      console.log("llego hasta aqui")
      this.route.navigateByUrl("/verinterconsulta");
      alert('Se ha creado la interconsulta exitosamente');
    }, err => {
     alert( "No se ha logrado registrar");
     
    })
  }

  back(){
    this.route.navigateByUrl("/datospaciente");
  }

  ngOnInit() {}

}
