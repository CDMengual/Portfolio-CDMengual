import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Entidades/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  getPersona(): Observable<any>{
    return this.http.get("http://localhost:8080/ver/persona/1");
  }

  modificarDatosPersonales(persona:Persona): Observable<any>{
    return this.http.put("http://localhost:8080/modificar/persona",persona);
  } 
}
