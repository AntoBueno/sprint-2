import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../../../servicios/apirest.service';
import { interconsulta } from '../../../datosapi/datosapi.models';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-verinterconsulta',
  templateUrl: './verinterconsulta.html',
  styleUrls: ['./verinterconsulta.scss'],
})
export class VerinterconsultaPage implements OnInit {
  
  public user: Object;
    public largo : Number;
    public nombre:string
    public apellido:string
    public i : number;
    public  inter = new Array();
  public interconsulta: Object

  constructor(
    private apiServices : ApirestService,
    private route : Router,
    private storage: Storage,
    private db: AngularFirestore
    
  ) { }

ngOnInit() {
    this.apiServices.doVerinterconsulta().subscribe((fichas)=>{
      this.interconsulta = fichas; 
      console.log(fichas);
   },error=>{
   console.log("errorrrrrrr") })

   var persona;
  //var rut_paciente = String
  var rut_paciente
this.storage.get('name').then((val)=>{
  
   this.db.doc('codigo/'+val).snapshotChanges().subscribe(data=>{
   
     persona= data.payload.get("rut");
     this.apellido = data.payload.get("apellido")
     this.nombre = data.payload.get("name")
      console.log(this.nombre+" "+this.apellido+" "+" "+persona)
          
           this.apiServices.doVerinterconsulta().subscribe((fichas)=>{
             this.user = fichas;
             this.largo = Object.keys(this.user).length;      
                   for( this.i = 0 ; this.i < this.largo ; this.i++  ){    
                     console.log( persona )             
                           if(this.user[this.i].rut_paciente == persona ){
                                      this.inter.push(this.user[this.i])
                           }
                   }       
             },error=>{
                 }
             )
       })
      })
  
  
  
  }

   goEliminarinterconsulta(id_interconsulta:number){
    this.apiServices.doEliminarinterconsulta(id_interconsulta).subscribe(data=>{
      alert("Interconsulta eliminada")
      console.log(id_interconsulta) 
      this.ngOnInit();
    },error=>{ 
     console.log('errrooooooorrrr')  
    })
  }
   
back(){
  this.route.navigateByUrl("/datospaciente");
}


}


