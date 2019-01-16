import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenteService {
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getPrimerPaso(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "services/pasos/ingreso/primer/", this.getAuthHeaders());
  }

  getPasosMayor(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "services/pasos/ingreso/", this.getAuthHeaders());
  }

  private getAuthHeaders(){
    const token = localStorage.getItem('token');
    const  headers= new HttpHeaders({'Content-Type': 'application/json; charset-utf-8', 'Authorization': 'token ' + token});
    return {headers: headers};
  }
  
}
