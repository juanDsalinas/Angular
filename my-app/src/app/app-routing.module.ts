import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LostComponent } from './lost/lost.component';
import { NuevaComponent } from './nueva/nueva.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'sign', component:SignUpComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'lost', component:LostComponent},
  {path:'nueva', component:NuevaComponent},
  {path:'prueba', component:PruebaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
