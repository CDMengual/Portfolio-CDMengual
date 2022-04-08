import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  formHabilidad: FormGroup;
  habilidad: Array <any>;

  constructor(private formBuilder:FormBuilder) {
    this.formHabilidad=this.formBuilder.group({
      id: [],
      habSkill: ["",[Validators.required]],
      habLogo:[""],
      habPuntuacion:["",[Validators.required],]
    })

    this.habilidad=[
      {skill: "HTML 5",
      puntuacion: "8",
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/250px-HTML5_logo_and_wordmark.svg.png',
      },
      {skill: "CSS",
      puntuacion: "8",
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
      },
      {skill: "TypeScript",
      puntuacion: "6",
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png',
      },
      {skill: "Angular",
      puntuacion: "7",
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Angular-logo.png',
      },
      {    skill: "Bootstrap",
      puntuacion: "7",
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png',
      },
      {    skill: "Trabajo en Equipo",
      puntuacion: "9",
      logo: 'https://www.nicepng.com/png/full/205-2054252_clip-art-royalty-free-library-about-asana-by.png',
      },
      {skill: "Ingles",
      puntuacion: "5",
      logo: 'https://freepikpsd.com/file/2019/10/eng-png-Transparent-Images.png',
      },]
   }

  ngOnInit(): void {
  }

  cambiosGuardados(){
    if(this.formHabilidad.valid){
      alert("Cambios guardados");
      let indice=this.formHabilidad.get("id")?.value
      this.habilidad[indice].skill=this.formHabilidad.value.habSkill;
      this.habilidad[indice].puntuacion=this.formHabilidad.value.habPuntuacion; 
      this.habilidad[indice].logo=this.formHabilidad.value.habLogo;  
    }
    else{
      alert("Campos invalidos")
    }
  }

  cargarFormulario(indice: number){
    this.formHabilidad.get("id")?.setValue(indice)
    this.formHabilidad.get("habSkill")?.setValue(this.habilidad[indice].skill)
    this.formHabilidad.get("habPuntuacion")?.setValue(this.habilidad[indice].puntuacion)
    this.formHabilidad.get("habLogo")?.setValue(this.habilidad[indice].logo)
  }

  deseaEliminar(indice: number){
    this.formHabilidad.get("id")?.setValue(indice)
  }

  borrarHabilidad(){
    let indice=this.formHabilidad.get("id")?.value
    
    this.habilidad.splice(indice,1)
  }

  get habSkill(){
    return this.formHabilidad.get('habSkill');
  }
  get habPuntuacion(){
    return this.formHabilidad.get('habPuntuacion');
  }
  get habLogo(){
    return this.formHabilidad.get('habLogo');
  }

}
