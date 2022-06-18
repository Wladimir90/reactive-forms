import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formularioContacto = new FormGroup({
    nombre: new FormControl("", [Validators.required, Validators.minLength(10)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    mensaje: new FormControl("", [Validators.required, Validators.maxLength(50)])
  });

  constructor(private fb: FormBuilder) { };

  ngOnInit(): void {
  }

  mostrarFormulario() {
    console.log(this.formularioContacto.value);
  }

}
