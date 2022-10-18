import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {
  formularioUsuario: FormGroup;
  contrasenasIguales!:boolean;

  constructor(fb: FormBuilder) {
    this.formularioUsuario = fb.group({
      nombre: new FormControl('',[Validators.required, Validators.required]),
      correo: new FormControl('',[ Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$'), Validators.required]),
      contraseña: new FormControl('',[Validators.minLength(5), Validators.required, Validators.pattern('^.*[A-Z]+.*$')]),
      contraseña2: new FormControl('',[Validators.minLength(5), Validators.required]),
      admin:new FormControl(false ,[Validators.requiredTrue]),
    })
   }

  ngOnInit(): void {
  }
  agregarUsuario(){ 
const contraseña1= this.formularioUsuario.value.contraseña;
const contraseña2= this.formularioUsuario.value.contraseña2;
this.contrasenasIguales = contraseña1===contraseña2;

  }

}
