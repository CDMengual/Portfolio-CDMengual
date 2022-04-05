import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  formHeader: FormGroup;
  nombre: string;
  imagen: string;
  puesto: string;
  ciudad: string;

  constructor(private formBuilder:FormBuilder) {
    this.formHeader=this.formBuilder.group({
      fullName: ["",[Validators.required]],
      posicion: ["",[Validators.required]],
      ciudadDeResidencia: ["", [Validators.required]],

    })
    this.imagen= "../../../assets/imagenes/Bannercielo.png"
    this.nombre="Cesar D. Mengual"
    this.puesto="Full Stack Developer Jr."
    this.ciudad="Ciudad Autónoma de Buenos Aires"
   }

  ngOnInit(): void {
  }


  cambiosGuardados(){
    if(this.formHeader.valid){
      alert("Cambios guardados");
      this.nombre=this.formHeader.value.fullName;
      this.puesto=this.formHeader.value.posicion; 
      this.ciudad=this.formHeader.value.ciudadDeResidencia;     
    }
    else{
      alert("Campos invalidos")
    }
  }

  get fullName(){
    return this.formHeader.get('fullName');
  }
  get posicion(){
    return this.formHeader.get('posicion');
  }
  get ciudadDeResidencia(){
    return this.formHeader.get('ciudadDeResidencia')
  }

}
