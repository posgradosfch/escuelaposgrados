import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';

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


const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'noticias', component: NoticiasComponent},
{path: 'quienes', component: QuienesSomosComponent},
{path: 'oferta', component: OfertaComponent},
{path: 'privado', component: PrivatePageComponent},
{path: 'registro', component: RegistrarUsuarioComponent},
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
    RegistrarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
