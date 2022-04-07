import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  formExperiencia: FormGroup;
  experiencia: Array <any>;
  


  constructor(private formBuilder:FormBuilder) { 
    this.formExperiencia=this.formBuilder.group({
      id: [],
      expEmpresa: ["",[Validators.required]],
      expCargo: ["",[Validators.required]],
      expFechaInicio: ["", [Validators.required]],
      expFechaFinal:[""],
      expTareas: ["", [Validators.required]],
    })

    this.experiencia=[
      {empresa: "Dirección Provincial de Educación Superior de la Prov. de Buenos Aires",
      cargo: "Coordinador Académico",
      fechaInicio: "01/05/2021",
      fechaFinal:"",
      tareas: 'This is a wider card with supporting text below as a natural lead-in'+
      'to additional content. This content is a little bit longer.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Logotipo_de_la_Provincia_de_Buenos_Aires.svg/512px-Logotipo_de_la_Provincia_de_Buenos_Aires.svg.png'
    },
      

      {empresa: "Asociación Cooperadora INEF N°1 Dr. Enrique Romero Brest",
      cargo: "Jefe de Administración",
      fechaInicio: "01/01/2016",
      tareas: '2015-2021',
      logo: "src=../../../assets/imagenes/lacoope_verde.png",
      },

      {empresa: "hjbhj",
      cargo: "Coohhhadémico",
      fechaInicio: "05/05/2020",
      tareas: 'Tjhgjhgjhbjh hghghj.',
      logo: 'https://1000marcas.net/wp-content/uploads/2020/01/Sega-emblema.jpg',
      }]

  
  }

  ngOnInit(): void {
  }

  cambiosGuardados(){
    if(this.formExperiencia.valid){
      alert("Cambios guardados");
      let indice=this.formExperiencia.get("id")?.value
      this.experiencia[indice].empresa=this.formExperiencia.value.expEmpresa;
      this.experiencia[indice].cargo=this.formExperiencia.value.expCargo; 
      this.experiencia[indice].fechaInicio=this.formExperiencia.value.expFechaInicio;
      this.experiencia[indice].tareas=this.formExperiencia.value.expTareas     
    }
    else{
      alert("Campos invalidos")
    }
  }

  cargarFormulario(indice: number){
    this.formExperiencia.get("id")?.setValue(indice)
    this.formExperiencia.get("expEmpresa")?.setValue(this.experiencia[indice].empresa)
    this.formExperiencia.get("expCargo")?.setValue(this.experiencia[indice].cargo)
    this.formExperiencia.get("expFechaInicio")?.setValue(this.experiencia[indice].fechaInicio)
    this.formExperiencia.get("expTareas")?.setValue(this.experiencia[indice].tareas)
  }

  deseaEliminar(indice: number){
    this.formExperiencia.get("id")?.setValue(indice)
  }

  borrarExperiencia(){
    let indice=this.formExperiencia.get("id")?.value
    
    this.experiencia.splice(indice,1)
  }

 
  get expEmpresa(){
    return this.formExperiencia.get('expEmpresa');
  }
  get expCargo(){
    return this.formExperiencia.get('expCargo');
  }
  get expFechaInicio(){
    return this.formExperiencia.get('expFechaInicio');
  }
  get expTareas(){
    return this.formExperiencia.get('expTareas');
  }

}
