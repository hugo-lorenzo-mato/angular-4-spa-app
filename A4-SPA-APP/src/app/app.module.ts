import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';


const rutasApp: Routes = [
  {path:'acerca-de' , component: AcercaDeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    HeaderComponent,
    AcercaDeComponent]
})
export class AppModule { }
