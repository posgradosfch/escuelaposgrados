import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Aspirante } from '../modelos/aspirante';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

	private aspiranteSource = new BehaviorSubject<Aspirante>(new Aspirante());
	aspirante = this.aspiranteSource.asObservable();

	set me(aspirante: Aspirante) {
		localStorage.setItem('account', JSON.stringify(aspirante));
		this.aspiranteSource.next(aspirante);
	}
}
