import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {interconsulta, kine, datosmedicos, psicologia} from '../datosapi/datosapi.models';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  
  constructor(

    public http: HttpClient
    ) {}

    doAgregarInterconsulta(interconsulta: interconsulta): Observable<any>{
      return this.http.post<any>("http://35.193.42.58:3000/interconsulta",interconsulta)
    } 

    doAgregarpsicologia(psicologia: psicologia): Observable<any>{
      return this.http.post<any>("http://35.193.42.58:3000/psicologia", psicologia)
    }

    doVerinterconsulta(): Observable <interconsulta[]> {
      return this.http.get<interconsulta[]>("http://35.193.42.58:3000/interconsulta")
    }

    doVerfichamedica( ) : Observable <kine[]> {
      return this.http.get<kine[]>("http://35.193.42.58:3000/datosmedicos")
      } 

    doAgregarFicha(datosmedicos: datosmedicos): Observable<datosmedicos[]>{
      return this.http.post<datosmedicos []>("http://35.193.42.58:3000/datosmedicos", datosmedicos)
    }
   
    doEliminarinterconsulta(interconsulta:number):Observable<any>{
      return this.http.delete<kine[]>("http://localhost:3000/interconsulta/" + interconsulta)
    }
    doEliminarfichamedica(datosmedicos:number) :Observable<any> {
      return this.http.delete<datosmedicos[]> ("http://localhost:3000/datosmedicos/" + datosmedicos)
    }

    doEliminarpsicologia(psicologia:number) :Observable<any> {
      return this.http.delete<psicologia[]> ("http://localhost:3000/psicologia" + psicologia)
    }

    doVerpsicologia(): Observable <psicologia[]> {
      return this.http.get<psicologia[]>("http://35.193.42.58:3000/psicologia")
    }

}
