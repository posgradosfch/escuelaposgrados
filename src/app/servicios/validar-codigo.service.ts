import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ValidarCodigoService {
  private messageSource = new BehaviorSubject<String>('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }
     validarCodigo(userData): Observable<any> {
     return this.http.post('https://posgradosback.herokuapp.com/validarCodigo/', userData);
     }

     changeMessage(message: String) {
       this.messageSource.next(message);
     }
}
