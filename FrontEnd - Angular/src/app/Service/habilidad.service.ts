import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../Entidades/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  constructor(private http:HttpClient) { }
  
  getListaHabilidades(): Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>("http://localhost:8080/ver/habilidades");
  }

  getHabilidad(id:String): Observable<any>{
    return this.http.get("http://localhost:8080/ver/habilidad/"+id);
  }

  crearHabilidad(habilidad:Habilidad): Observable<any>{
    return this.http.post("http://localhost:8080/new/habilidad",habilidad);
  }

  modificarHabilidad(habilidad:Habilidad): Observable<any>{
    console.log(habilidad);
    return this.http.put("http://localhost:8080/modificar/habilidad",habilidad);
  } 

  borrarHabilidad(id:number): Observable<any>{
    return this.http.delete("http://localhost:8080/delete/habilidad/"+id);
  }

}
