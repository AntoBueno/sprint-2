import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { ApirestService } from '../../../servicios/apirest.service';
import { AuthService } from "../../../servicios/auth.service";
import { ActivatedRoute } from '@angular/router';
import { codigo, kine, interconsulta } from '../../../datosapi/datosapi.models';
import { AngularFirestore} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import {environment} from '../../../../environments/environment'

@Component({
  selector: 'app-verfichamedica',
  templateUrl: './verfichamedica.html',
  styleUrls: ['./verfichamedica.scss'],
})
export class VerfichamedicaPage implements OnInit  {

public fichas: Object;
public user: Object;
  public largo : Number;
  public nombre:string
  public apellido:string
  public i : number;
  public  interconsulta = new Array();

  constructor(
    public http: HttpClient,
    public apiServices: ApirestService,
    private route: Router,
    private auth: AuthService,
    private storage: Storage,
    private db: AngularFirestore
   ) {}

  
  ngOnInit() {
    this.apiServices.doVerfichamedica().subscribe((fichas)=>{
      this.fichas = fichas; 
      console.log(fichas);
   },error=>{
   console.log("errorrrrrrr")   })
  
   var persona;
  //var rut_paciente = String
  var rut_paciente
this.storage.get('name').then((val)=>{
  
   this.db.doc('codigo/'+val).snapshotChanges().subscribe(data=>{
   
     persona= data.payload.get("rut");
     this.apellido = data.payload.get("apellido")
     this.nombre = data.payload.get("name")
      console.log(this.nombre+" "+this.apellido+" "+" "+persona)
          
           this.apiServices.doVerfichamedica().subscribe((fichas)=>{
             this.user = fichas;
             this.largo = Object.keys(this.user).length;      
                   for( this.i = 0 ; this.i < this.largo ; this.i++  ){    
                     console.log( persona )             
                           if(this.user[this.i].rut == persona ){
                                      this.interconsulta.push(this.user[this.i])
                           }
                   }       
             },error=>{
                 // console.log("hola")
                 }
             )
           //------------------------------------------------------------------------------------------------ 
       })
      })
      
   }
  

  goEliminarficha(id_fichas:number){
    this.apiServices.doEliminarfichamedica(id_fichas).subscribe(data=>{
      alert("Ficha eliminada")
      console.log(id_fichas)  
      this.ngOnInit();
    },error=>{ 
     console.log('errrooooooorrrr')  
    })
  }

  

  back(){
    this.route.navigateByUrl("/datospaciente");
  }


  

}

