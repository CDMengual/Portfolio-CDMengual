import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  formHeader: FormGroup;
  imagen: string;
  info: Array <any>;

  constructor(private formBuilder:FormBuilder) {
    this.formHeader=this.formBuilder.group({
      id: [],
      fullName: ["",[Validators.required]],
      posicion: ["",[Validators.required]],
      ciudadDeResidencia: ["", [Validators.required]],

    })

    this.info=[{
      nombre:"Cesar D. Mengual",
      puesto:"Full Stack Developer Jr.",
      ciudad:"Ciudad Autónoma de Buenos Aires",
    }]
  
    this.imagen= "../../../assets/imagenes/Bannercielo.png"
   }

  ngOnInit(): void {
  }

  cargarFormulario(indice: number){
    this.formHeader.get("id")?.setValue(indice)
    this.formHeader.get("fullName")?.setValue(this.info[indice].nombre)
    this.formHeader.get("posicion")?.setValue(this.info[indice].puesto)
    this.formHeader.get("ciudadDeResidencia")?.setValue(this.info[indice].ciudad)
   
  }

  cambiosGuardados(){
    if(this.formHeader.valid){
      alert("Cambios guardados");
      let indice=this.formHeader.get("id")?.value
      this.info[indice].nombre=this.formHeader.value.fullName;
      this.info[indice].puesto=this.formHeader.value.posicion; 
      this.info[indice].ciudad=this.formHeader.value.ciudadDeResidencia;     
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
