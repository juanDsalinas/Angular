import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { LostComponent } from './lost/lost.component';
import { NuevaComponent } from './nueva/nueva.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from './prueba/prueba.component';
import { FotoPokemonComponent } from './components/foto-pokemon/foto-pokemon.component';
import { TarjetaPokemonComponent } from './components/tarjeta-pokemon/tarjeta-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    LostComponent,
    NuevaComponent,
    PruebaComponent,
    FotoPokemonComponent,
    TarjetaPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
