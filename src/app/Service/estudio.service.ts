import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../Entidades/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  constructor(private http:HttpClient) {}

  
  getEstudio(): Observable<any>{
    return this.http.get("http://localhost:8080/ver/estudio/{id}");
  }

  crearEstudio(estudio:Estudio): Observable<any>{
    return this.http.post("http/localhost:8080/new/estudio",estudio);
  }

  modificarEstudio(estudio:Estudio): Observable<any>{
    return this.http.put("http://localhost:8080/modificar/estudio",estudio);
  } 

  borrarEstudio(id:number): Observable<any>{
    return this.http.delete("http://localhost:8080/delete/estudio/{id}");
  }

}


