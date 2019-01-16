import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticias } from './noticias';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  baseUrl: string = environment.apiUrl+ "services/noticia/";
  private noticia: Noticias;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  getNoticias (): Observable<Noticias[]>{
  	return this.http.get<Noticias[]>(this.baseUrl,{headers:this.headers});
  }
}
