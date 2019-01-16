import { Component, OnInit } from '@angular/core';
import { Aspirante } from '../modelos/aspirante';
import { Subscription, Observable } from 'rxjs';
import { GlobalService } from '../servicios/global.service';
import { LoginService } from '../servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-settings',
  templateUrl: './nav-settings.component.html',
  styleUrls: ['./nav-settings.component.css']
})
export class NavSettingsComponent implements OnInit {

  account: Aspirante = new Aspirante();
  userSub: Subscription;
  isLoggedIn$: Observable<boolean>;

  constructor(private global: GlobalService, private login: LoginService, private router: Router) {}

  ngOnInit() {
  	this.userSub = this.global.aspirante.subscribe(
  		me => {this.account = me;
  		});
    this.isLoggedIn$ = this.login.isLoggedIn;
  }
  private logoutClicked() {
  	this.global.me = new Aspirante();
  	localStorage.removeItem('token');
  	localStorage.removeItem('account');
  	this.router.navigate(['/home']);
    this.login.logout();
  }
}
