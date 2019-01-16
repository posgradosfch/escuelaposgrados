import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AsistenteService } from '../servicios/asistente.service';
import { Paso } from '../modelos/paso';

@Component({
  selector: 'app-asistente',
  templateUrl: './asistente.component.html',
  styleUrls: ['./asistente.component.css']
})
export class AsistenteComponent implements OnInit {

  formGroup1: FormGroup;
  formGroup: FormGroup;
  pasos: Paso[];
  paso: Paso[];
  constructor(private _formBuilder: FormBuilder, private asistenteService: AsistenteService) { }

  ngOnInit(): void {
  	
  	/*this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });*/

    this.getPasos();
    this.getPrimerPaso();

  }

  getPrimerPaso(){
    this.asistenteService.getPrimerPaso().subscribe(paso =>{
      this.paso = paso;
      console.log('paso', paso);
    }, error =>{
      console.log('error', error);
    })
  }

  getPasos(){
    this.asistenteService.getPasosMayor().subscribe(pasos =>{
      this.pasos = pasos;
      console.log('pasos', pasos);
    }, error =>{
      console.log('error', error);
    })
  }

}
