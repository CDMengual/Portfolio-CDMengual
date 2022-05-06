import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../Entidades/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http:HttpClient) { }

  getListaExperiencias(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>("http://localhost:8080/ver/experiencias");
  }

  getExperiencia(id:String): Observable<any>{
    return this.http.get("http://localhost:8080/ver/expriencia/"+id);
  }

  crearExperiencia(experiencia:Experiencia): Observable<any>{
    return this.http.post("http://localhost:8080/new/experiencia",experiencia);
  }

  modificarExperiencia(experiencia:Experiencia): Observable<any>{
    console.log(experiencia);
    return this.http.put("http://localhost:8080/modificar/experiencia",experiencia);
  } 

  borrarExperiencia(id:number): Observable<any>{
    return this.http.delete("http://localhost:8080/delete/experiencia/"+id);
  }

}

