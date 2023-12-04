import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lost',
  templateUrl: './lost.component.html',
  styleUrls: ['./lost.component.css']
})
export class LostComponent {
  User:String=''
  data:Array<any>=[]

  constructor(private router:Router){
    this.data
  }

  cambios(values:any){
    const uno = localStorage.getItem('users');
    if (uno) {
      this.data = JSON.parse(uno)
      console.log(this.data);  
    } else {
      console.log("No trajo nada");
      this.data = []
    }

    for(let i=0; i<this.data.length; i++){
        if (values.User === this.data[i].username) {
          console.log("EXISTE");
          const coincido = this.data[i]
          localStorage.setItem("cambio",JSON.stringify(coincido));
          this.router.navigate(['/nueva']);
        } else {
          console.log("Username No Existe");
          
        }
    }

  }



}