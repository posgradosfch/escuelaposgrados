import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatIconModule} from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from "@angular/material"
//import { AppRoutingModule } from './app-routing.module';
import { MatTooltipModule} from '@angular/material/tooltip';
//import { AngularSvgIconModule } from 'angular-svg-icon';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatBadgeModule } from '@angular/material/badge'
import { MatExpansionModule} from '@angular/material/expansion';
import { MatListModule} from '@angular/material/list';
//import { NgxPaginationModule } from 'ngx-pagination';
//import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "angular5-social-login";
import {MatChipsModule} from '@angular/material/chips';

//servicios globales
import { LoginService } from './servicios/login.service';
import { GlobalService } from './servicios/global.service';


import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { OfertaComponent } from './oferta/oferta.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { PrivatePageComponent } from './private-page/private-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';

import { IngresarCodigoComponent } from './ingresar-codigo/ingresar-codigo.component';
import { AsistenteComponent } from './asistente/asistente.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NavSettingsComponent } from './nav-settings/nav-settings.component';
import { AgendaComponent } from './agenda/agenda.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'noticias', component: NoticiasComponent},
{path: 'quienes', component: QuienesSomosComponent},
{path: 'oferta', component: OfertaComponent},
{path: 'privado', component: PrivatePageComponent},
{path: 'registro', component: RegistrarUsuarioComponent},
{path: 'ingresarCodigo', component: IngresarCodigoComponent},
{path: 'asistente', component: AsistenteComponent},
{path: 'agenda', component: AgendaComponent},
{path: '**', component: PageNotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienesSomosComponent,
    OfertaComponent,
    NoticiasComponent,
    LoginComponent,
    NavbarComponent,
    HeaderComponent,
    CarruselComponent,
    PrivatePageComponent,
    PageNotFoundComponent,
    RegistrarUsuarioComponent,
    IngresarCodigoComponent,
    AsistenteComponent,
    NavMenuComponent,
    NavSettingsComponent,
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    MatButtonModule, 
    MatCheckboxModule,
    MatStepperModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatPaginatorModule, 
    MatProgressSpinnerModule, 
    MatSortModule, 
    MatTableModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatExpansionModule,
    MatListModule,
    MatDialogModule,
    MatChipsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatStepperModule,
    MatFormFieldModule
  ],
  providers: [
    LoginService,
    GlobalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
