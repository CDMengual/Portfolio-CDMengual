import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/Entidades/experiencia';
import { ExperienciaService } from 'src/app/Service/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  formExperiencia: FormGroup;
  experiencias: Experiencia[];
  


  constructor(private experienciaService:ExperienciaService,private formBuilder:FormBuilder) { 
    this.formExperiencia=this.formBuilder.group({
      id: [],
      empresa: ["",[Validators.required]],
      cargo: ["",[Validators.required]],
      fechaInicio: ["", [Validators.required]],
      fechaFin:[""],
      tareas: ["", [Validators.required]],
      logo: [""],
    })

    this.experiencias=[];

  }

    /*this.experiencia=[
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
*/
  
 

  ngOnInit(): void {
    this.experienciaService.getListaExperiencias().subscribe(data=>{
      this.experiencias=data;})
  }

  cargarFormulario(indice: number){
    this.formExperiencia.get("id")?.setValue(indice)
    this.formExperiencia.get("empresa")?.setValue(this.experiencias[indice].empresa)
    this.formExperiencia.get("cargo")?.setValue(this.experiencias[indice].cargo)
    this.formExperiencia.get("fechaInicio")?.setValue(formatDate(this.experiencias[indice].fechaInicio,"yyyy-MM-dd","en"))
    this.formExperiencia.get("fechaFin")?.setValue(formatDate(this.experiencias[indice].fechaFin,"yyyy-MM-dd","en"))
    this.formExperiencia.get("tareas")?.setValue(this.experiencias[indice].tareas)
    this.formExperiencia.get("logo")?.setValue(this.experiencias[indice].logo)
  }

  cambiosGuardados(){
    if(this.formExperiencia.valid){
      alert("Cambios guardados");
      let indice=this.formExperiencia.get("id")?.value
      this.experiencias[indice].empresa=this.formExperiencia.value.empresa;  
      this.experiencias[indice].cargo=this.formExperiencia.value.cargo;
      this.experiencias[indice].fechaInicio=this.formExperiencia.value.fechaInicio;
      this.experiencias[indice].fechaFin=this.formExperiencia.value.fechaFin;
      this.experiencias[indice].tareas=this.formExperiencia.value.tareas
      this.experiencias[indice].logo=this.formExperiencia.value.logo
      this.experienciaService.modificarExperiencia  (this.experiencias[indice]).subscribe(experiencia=>{
        console.log(experiencia);
      });  
    }
    else{
      alert("Campos invalidos")
    }
  }        
   
  deseaEliminar(id: number){
    this.formExperiencia.get("id")?.setValue(id)
  }

  borrarExperiencia(){
    this.experienciaService.borrarExperiencia(this.formExperiencia.value.id).subscribe(()=>{
      this.experiencias=this.experiencias.filter(experiencia=>{return this.formExperiencia.value.id !==experiencia.id});
    }      
    );
  }

  crearExperiencia(){ 
    if(this.formExperiencia.valid){
      let newExperiencia=new Experiencia(1,
        this.formExperiencia.value.empresa,
        this.formExperiencia.value.cargo,
        this.formExperiencia.value.fechaInicio,
        this.formExperiencia.value.fechaFin,
        this.formExperiencia.value.tareas,
        this.formExperiencia.value.logo,
        1)
        delete newExperiencia.id;
         
      this.experienciaService.crearExperiencia(newExperiencia).subscribe(data=>{
        alert("Experiencia guardada");
      this.experiencias.push(data);
      });  
    }
    else{
      alert("Campos invalidos")
    }
  }

 
  get empresa(){
    return this.formExperiencia.get('empresa');
  }
  get cargo(){
    return this.formExperiencia.get('cargo');
  }
  get fechaInicio(){
    return this.formExperiencia.get('fechaInicio');
  }
  get fechaFin(){
    return this.formExperiencia.get('fechaFin');
  }
  get tareas(){
    return this.formExperiencia.get('tareas');
  }
  get logo(){
    return this.formExperiencia.get('logo');
  }

}
