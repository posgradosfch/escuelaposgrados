import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodigoService {

  constructor(private http: HttpClient) { }
  codigo(userData): Observable<any> {
    return this.http.post('https://postgrados.herokuapp.com/services/codigo/', userData);
  }
}
