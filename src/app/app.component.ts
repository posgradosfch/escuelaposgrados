import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aspirante } from './modelos/aspirante';
import { Subscription, Observable } from 'rxjs';
import { GlobalService } from './servicios/global.service';
import { LoginService } from './servicios/login.service';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	title = 'Escuela de Posgrados';
	account: Aspirante = new Aspirante();
	userSub: Subscription;
	isLoggedIn$: Observable<boolean>;

	constructor(private global: GlobalService, 
  		private login: LoginService, private router: Router) {  }

	ngOnInit() {
	  	this.userSub = this.global.aspirante.subscribe(
	  		me => {this.account = me;
	  		});
	    this.isLoggedIn$ = this.login.isLoggedIn;
	}

	logoutClicked() {
	  	this.global.me = new Aspirante();
	  	localStorage.removeItem('token');
	  	localStorage.removeItem('account');
	  	this.router.navigate(['/home']);
	    this.login.logout();
	}
}
  
  