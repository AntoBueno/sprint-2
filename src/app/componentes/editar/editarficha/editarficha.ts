import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApirestService } from '../../../servicios/apirest.service';
import { ActionSheetController } from '@ionic/angular';
import{datosmedicos} from '../../../datosapi/datosapi.models';
import {Router } from '@angular/router';
@Component({
  selector: 'app-editarficha',
  templateUrl: './editarficha.html',
  styleUrls: ['./editarficha.scss'],
})
export class EditarfichaPage implements OnInit {

  datosmed:datosmedicos = new datosmedicos();
  public datosmedicos: Object

  constructor( 
    private storage: Storage,  
    private route:Router ,
    public actionSheetController: ActionSheetController, 
    private apiRest : ApirestService ) { }

  ngOnInit() {
    this.storage.get('datosmedicos').then((val) => {  
     this.datosmed = val
      this.datosmedicos= Array.of(this.datosmedicos)
      
    });
    
  }

  goEditarF(datosmedicos :datosmedicos ){

    this.datosmed=datosmedicos[0]  
  this.apiRest.doEditarficha(this.datosmed,(this.datosmed.id).toString()).subscribe(()=>{
    alert("Editado con exito")
    this.route.navigateByUrl("/verfichamedica");
    
   },erro=>{
    console.log('error editar')
  
   }) 
  }

}
