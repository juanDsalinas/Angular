import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  nombre:String='';
  
  constructor(){
    
  }

  // Eventos antes de que se ejecute la pagina
  ngOnInit():void{
    // alert('Hello Web')
  } 

  mostrarNombre(){
    this.nombre='Adios';
  }

} 