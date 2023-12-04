import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaComponent {
  User:String=''
  data:Array<any>=[]
  usua:any={}
  constructor(private router:Router){
    this.data
    this.usua
  }

  passwor(values:any){
    const uno = localStorage.getItem('users');
    const dos = localStorage.getItem('cambio');
    if (uno) {
      this.data = JSON.parse(uno)
      console.log(this.data);  
    } else {
      console.log("No trajo nada");
      this.data = []
    }

    if (dos) {
      this.usua = JSON.parse(dos)
      console.log(this.usua);  
    } else {
      console.log("No trajo nada");
      this.usua = ''
    }

    for(let i=0; i<this.data.length; i++){
        if (this.usua.username === this.data[i].username && this.usua.password == this.data[i].password) {
            this.data[i].password = values.password
            // console.log(values.password);
            localStorage.setItem("users",JSON.stringify(this.data));
            this.router.navigate(['/']);
        } else {
          console.log("Username No Existe");
          
        }
    }

  }

}
