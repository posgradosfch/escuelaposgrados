import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'noticias', component: NoticiasComponent},
{path: 'quienes', component: QuienesSomosComponent},
{path: 'oferta', component: OfertaComponent},
{path: 'privado', component: PrivatePageComponent},
{path: 'registro', component: RegistrarUsuarioComponent},
{path: 'ingresarCodigo', component: IngresarCodigoComponent},
{path: 'asistente', component: AsistenteComponent},
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
    AsistenteComponent
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
    MatFormFieldModule
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
