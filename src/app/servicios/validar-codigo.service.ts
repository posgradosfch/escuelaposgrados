import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidarCodigoService {
  baseUrl: string = environment.apiUrl + 'validarCodigo/';

  private messageSource = new BehaviorSubject<String>('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }
     validarCodigoAspirante(userData): Observable<any> {
     return this.http.post(this.baseUrl, userData);
     }

     changeMessage(message: String) {
       this.messageSource.next(message);
     }
}
