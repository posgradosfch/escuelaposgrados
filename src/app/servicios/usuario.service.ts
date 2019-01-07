import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Aspirante } from '../modelos/aspirante';


@Injectable({
providedIn: 'root'
})

export class UsuarioService {
	
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  registerUser(userData): Observable<any> {
  return this.http.post('https://posgradosback.herokuapp.com/services/aspirante/v2/', userData);
  }

  loginUser(userData: any): Observable<any>{
    return this.http.post(this.baseUrl + "auth/aspirante", userData, this.getAuthHeaders());
  }

  private getAuthHeaders(){
    const token = localStorage.getItem('token');
    const  headers= new HttpHeaders({'Content-Type': 'application/json; charset-utf-8', 'Authorization': 'token ' + token});
    return {headers: headers};
  }

}
