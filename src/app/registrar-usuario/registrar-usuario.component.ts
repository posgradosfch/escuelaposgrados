import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
  providers: [UsuarioService],
})

export class RegistrarUsuarioComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder) { }
  register;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombre_aspirante: ['', [Validators.required, Validators.pattern('^[ A-Za-záéíóúÁÉÍÓÚñ]+$')]],
      apellido_aspirante: ['', [Validators.required, Validators.pattern('^[ A-Za-záéíóúÁÉÍÓÚñ]+$')]],
      contrasena_aspirante: ['', [Validators.required, Validators.minLength(7)]],
      dui: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      // [0-9]{8}-[(0-9)]
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
      id_user: '',
      id_val: ''
  });

    this.register = {
    //   username: '',
       nombre_aspirante: '',
       apellido_aspirante: '',
       contrasena_aspirante: '',
       dui: '',
       genero: '',
       fechas_nac: '',
       t_fijo: '',
       t_movil: '',
       email: '',
       titulo_pre: '',
       institucion: '',
       f_expedicion: '',
       municipio: '',
       lugar_trab: '',
       programa: '',
       id_user: '',
       id_val: ''
    };
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
       alert('User' + ' ' + this.f.nombre_aspirante + ' ' + 'has been created' );
       },
     error => console.log('error', error)
   );
 }

}
