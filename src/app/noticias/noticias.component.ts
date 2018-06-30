import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../servicios/noticias.service';
import { Noticias } from '../servicios/noticias';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  private noticias:Noticias[];

  constructor(private noticiaServicio:NoticiasService) { }


  ngOnInit(): void {
  	this.noticiaServicio.getNoticias().subscribe(noticias => {
  		console.log(noticias);
  		this.noticias = noticias;
  	},(error)=>{
  		console.log(error);
  	});

  }

}
