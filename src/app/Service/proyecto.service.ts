import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../Entidades/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http:HttpClient) { }
  
  getListaProyectos(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>("http://localhost:8080/ver/proyectos");
  }

  getProyecto(id:String): Observable<any>{
    return this.http.get("http://localhost:8080/ver/proyecto/"+id);
  }

  crearProyecto(proyecto:Proyecto): Observable<any>{
    return this.http.post("http://localhost:8080/new/proyecto",proyecto);
  }

  modificarProyecto(proyecto:Proyecto): Observable<any>{
    console.log(proyecto);
    return this.http.put("http://localhost:8080/modificar/proyecto",proyecto);
  } 

  borrarProyecto(id:number): Observable<any>{
    return this.http.delete("http://localhost:8080/delete/proyecto/"+id);
  }

}
