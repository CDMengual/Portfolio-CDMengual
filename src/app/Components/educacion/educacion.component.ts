import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudio } from 'src/app/Entidades/estudio';
import { EstudioService } from 'src/app/Service/estudio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  formEducacion: FormGroup;
  info!: Estudio[];

  constructor(private estudioService:EstudioService,private formBuilder:FormBuilder) { 
    this.formEducacion=this.formBuilder.group({
      id: [],
      eduLogo: [''],
      eduTitulo: ['',[Validators.required]],
      eduInstituto: ['',[Validators.required]],
      eduFechaEgreso: ['',[Validators.required]],
    })

    /*this.educacion=[
      {logo: 'https://i0.wp.com/romerobrest.edu.ar/wp-content/uploads/2020/08/site_logo_isef_romero-brest-1_210x69.png?fit=210%2C69&ssl=1',
      titulo: "Profesor de Educación Física con especialización en Formación y Gestión Deportiva",
      instituto: "ISEF N°1 Dr. Enrique Romero Brest",
      fechaEgreso:"01/03/2019",
    },
      {logo: 'https://www.unsam.edu.ar/img/logo-unsam-2020.png',
      titulo: "Diplomado en Política y Gestión Deportiva",
      instituto: "Universidad de San Martín",
      fechaEgreso:"01/12/2020",
    },
    {logo: 'http://www.cpel.uba.ar/images/logo-web-carlos-pellegrini.png',
    titulo: "Perito Mercantil",
    instituto: "Escuela Superior de Comercio Carlos Pellegrini",
    fechaEgreso:"20/12/2009",
  },
    ]*/
}

  ngOnInit(): void {
    this.estudioService.getEstudio().subscribe(info=>{
      this.info=info;
    })
  }

  cargarFormulario(indice: number){
    this.formEducacion.get("id")?.setValue(indice)
    this.formEducacion.get("eduLogo")?.setValue(this.estudio[indice].logo)
    this.formEducacion.get("eduTitulo")?.setValue(this.estudio[indice].titulo)
    this.formEducacion.get("eduInstituto")?.setValue(this.estudio[indice].instituto)
    this.formEducacion.get("eduFechaEgreso")?.setValue(this.estudio[indice].fechaEgreso)
  }

  cambiosGuardados(){
    if(this.formEducacion.valid){
      alert("Cambios guardados");
      let indice=this.formEducacion.get("id")?.value
      this.estudio[indice].logo=this.formEducacion.value.eduLogo;
      this.estudio[indice].titulo=this.formEducacion.value.eduTitulo; 
      this.estudio[indice].instituto=this.formEducacion.value.eduInstituto;
      this.estudio[indice].fechaEgreso=this.formEducacion.value.eduFechaEgreso;
      this.estudioService.modificarEstudio(this.info).subscribe(estudio=>{
        console.log(estudio);
      });  
    }
    else{
      alert("Campos invalidos")
    }
  }

  

  deseaEliminar(indice: number){
    this.formEducacion.get("id")?.setValue(indice)
  }

  borrarEducacion(){
    let indice=this.formEducacion.get("id")?.value
    
    this.estudioService.borrarEstudio(indice).subscribe(info=>{
      console.log(info);
    });  ;
  }

 

  get eduLogo(){
    return this.formEducacion.get('eduLogo');
  }
  get eduTitulo(){
    return this.formEducacion.get('eduTitulo');
  }
  get eduInstituto(){
    return this.formEducacion.get('eduInstituto');
  }
  get eduFechaEgreso(){
    return this.formEducacion.get('eduFechaEgreso');
  }


}
