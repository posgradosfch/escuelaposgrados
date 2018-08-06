import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
// import { codigoService } from './Servicios/';
// import {passValidator} from './custom-validators';

@Component({
  selector: 'app-ingresar-codigo',
  templateUrl: './ingresar-codigo.component.html',
  styleUrls: ['./ingresar-codigo.component.css']
})
export class IngresarCodigoComponent implements OnInit {
myForm: FormGroup;
isCodeCorrect = false;
submitted = false;
registerForm: FormGroup;


constructor(private router: Router, private formBuilder: FormBuilder) {}


ngOnInit() {
  this.myForm = this.formBuilder.group({
  codigo: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]]
  });

  this.registerForm = this.formBuilder.group({
    codigo: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  });
  }

 // para facilitar el acceso al resgisterForm
  get f() { return this.registerForm.controls; }
  onSubmit() {
     this.submitted = true;
     const formValue = this.registerForm.value;
     console.log(formValue);

     // para aca si el codigo es invalido
    if (this.registerForm.invalid) {
       return;
      }

     alert('código ingresado correctamente');
 this.isCodeCorrect = true;
 this.router.navigate(['/registro']);
    }

    validarCodigo () {
    }

}
