import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { datosmedicos } from 'src/app/datosapi/datosapi.models';
import { ApirestService } from '../../servicios/apirest.service';

@Component({
  selector: 'app-fichamedica',
  templateUrl: './fichamedica.html',
  styleUrls: ['./fichamedica.scss'],
})
export class FichamedicaPage implements OnInit {

  datosmedicos: datosmedicos = new datosmedicos();

  constructor(
    private apiRest: ApirestService,
    private route: Router
  ) {}

  goAgregarFicha() {
  this.apiRest.doAgregarFicha(this.datosmedicos).subscribe(res => {
    this.route.navigateByUrl("/verfichamedica");
    alert('Se ha creado la ficha exitosamente');
  }, err => {
   alert( "No se ha logrado registrar ");
   })
}
  
  ngOnInit() {}
 
  back(){
    this.route.navigateByUrl("/datospaciente");
  }
}
