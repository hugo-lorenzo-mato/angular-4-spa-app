import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { Error404Component } from './error404/error404.component';

import { DataServiceService } from './data-service.service';


const rutasApp: Routes = [
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'pick-color' , component: HeaderComponent },
  { path: 'pick-color/:color', component: HeaderComponent },
  {path: '' , component: InicioComponent , pathMatch:'full'},
  {path: '404' , component: Error404Component},
  {path: '**' , redirectTo: '404'}, // ** funciona como comodín */

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    MenuComponent,
    InicioComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutasApp),
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    MenuComponent,
    InicioComponent]
})
export class AppModule { }
