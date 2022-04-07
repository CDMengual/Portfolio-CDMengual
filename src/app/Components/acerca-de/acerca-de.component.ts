import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  formAcercaDe: FormGroup;
  infoMia: string;

  constructor(private formBuilder:FormBuilder) {
    this.formAcercaDe=this.formBuilder.group({
      acercaDeMi: ["",Validators.required]
    })

    this.infoMia= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio accusantium '+
    'autem repellat, animi numquam nobis amet dolorem, iure suscipit tempore error aliquam? '+
    'Corporis at adipisci velit aliquam, expedita provident laborum! Lorem ipsum dolor sit '+ 
    'amet consectetur adipisicing elit. Laborum vel officiis, quidem eos repudiandae laboriosam '+
    'fuga ab culpa ut sed in unde perspiciatis explicabo nihil, blanditiis maiores fugiat quas'

   }

  ngOnInit(): void {
  }

  cargarFormulario(){
    this.formAcercaDe.get("acercaDeMi")?.setValue(this.infoMia)
  }


  cambiosGuardados(){
    if(this.formAcercaDe.valid){
      alert("Cambios guardados");
      this.infoMia=this.formAcercaDe.value.acercaDeMi;  
    }
    else{
      alert("Debe completar el campo")
    }
  }

  get acercaDeMi(){
    return this.formAcercaDe.get('acercaDeMi');
  }

}
