import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ValidarCodigoService } from '../servicios/validar-codigo.service';
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
codigoAspirante: String;
codigoAsp: String;
constructor(private router: Router, private formBuilder: FormBuilder, private validarCod: ValidarCodigoService) {}


ngOnInit() {
  this.myForm = this.formBuilder.group({
  codigo: ['', [Validators.required]]
  //  Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
  });
  }

 // para facilitar el acceso al resgisterForm
  get f() { return this.myForm.controls; }

 //    alert('código ingresado correctamente');
 // this.isCodeCorrect = true;

   // }

    validarCodigo() {
      console.log('esto esta en el form');
      console.log(this.myForm.value);
      this.submitted = true;
      // stop here if form is invalid
       if (this.myForm.invalid) {
           console.log('form invalido');
           return;
       }
      this.validarCod.validarCodigoAspirante(this.myForm.value).subscribe(
        response => {
          if (response.existe == true) {
            alert('This' + ' ' + this.f.codigo.value + ' ' + 'it is correct' );
            this.codigoAspirante = this.f.codigo.value;
            this.validarCod.changeMessage(response.id);
          } else {
             alert('This' + ' ' + this.f.codigo.value + ' ' + 'is not correct');
          }
          this.router.navigate(['/registro']);
          console.log('esto responde el microservicio');
          console.log(response.existe);
          console.log('esto tiene myForm');
          console.log(this.myForm.value);
          },
        error => console.log('error', error)
      );

    }


}
