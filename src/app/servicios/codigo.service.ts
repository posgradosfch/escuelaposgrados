import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CodigoService {
  baseUrl: string = environment.apiUrl + 'services/codigo/';
  constructor(private http: HttpClient) { }
  codigo(userData): Observable<any> {
    return this.http.post(this.baseUrl, userData);
  }
}
