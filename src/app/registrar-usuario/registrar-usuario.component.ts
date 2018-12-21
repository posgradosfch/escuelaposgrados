import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ValidarCodigoService } from '../servicios/validar-codigo.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
  providers: [UsuarioService],
})

export class RegistrarUsuarioComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  message: String;

  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder, private validarCod: ValidarCodigoService) { }
  register;
  ngOnInit() {
    this.validarCod.currentMessage.subscribe(message => {
      this.message = message;
    } );
    this.registerForm = this.formBuilder.group({
      nombreAsp: ['', [Validators.required, Validators.pattern('^[ A-Za-záéíóúÁÉÍÓÚñ]+$')]],
      apellidoAsp: ['', [Validators.required, Validators.pattern('^[ A-Za-záéíóúÁÉÍÓÚñ]+$')]],
      password: ['', [Validators.required, Validators.minLength(7)]],
      dui: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      genero: ['', Validators.required],
      fechas_nac: ['', Validators.required],
      t_fijo: ['', [Validators.required,  Validators.pattern('[0-9]{8}')]],
      t_movil: ['', [Validators.required,  Validators.pattern('[0-9]{8}')]],
      email: ['', [Validators.required, Validators.email]],
      titulo_pre: ['', [Validators.required, Validators.pattern('^[ A-Za-záéíóúÁÉÍÓÚñ]+$')]],
      institucion: ['', [Validators.required, Validators.pattern('^[ A-Za-záéíóúÁÉÍÓÚñ]+$')]],
      f_expedicion: ['', Validators.required],
      municipio: ['', [Validators.required, Validators.pattern('^[ A-Za-záéíóúÁÉÍÓÚñ]+$')]],
      lugar_trab: ['', [Validators.required, Validators.pattern('^[ A-Za-záéíóúÁÉÍÓÚñ]+$')]],
      programa: ['', [Validators.required, Validators.pattern('^[ A-Za-záéíóúÁÉÍÓÚñ]+$')]],
      aceptado: 'False',
      nombreuser_aspirante: ['', [Validators.required, Validators.pattern('^[ A-Za-záéíóúÁÉÍÓÚñ]+$')]],
      idVal: this.message,
  });

  } // fin Oninit

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

// onSubmit() {
//    this.submitted = true;
    // stop here if form is invalid
//    if (this.registerForm.invalid) {
//      return;
//  }
//    alert('SUCCESS!! :-)');
// }// fin Onsubmit

 registrarUsuario() {
   console.log(this.registerForm.value);

   this.submitted = true;
   // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
   this.usuarioService.registerUser(this.registerForm.value).subscribe(
     response => {
       alert('User' + ' ' + this.f.nombreAsp + ' ' + 'has been created' );
       console.log(response);
       },
     error => console.log('error', error)
   );
 }

}
