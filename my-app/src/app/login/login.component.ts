import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:String=''
  data:Array<any>=[];
  state:boolean=false;
  message:String=''
  constructor(private router:Router){
    this.data
  }

  change(values:any){
   
    const storeData = localStorage.getItem('users');
    if(storeData){
      this.data = JSON.parse(storeData)
      this.message = "Credenciales Incorrectas";
      for (let i=0; i<this.data.length; i++) {
          if (values.username == this.data[i].username && values.password == this.data[i].password) {
            console.log("Pasa");
            const user = {
              "username":values.username
            }
            localStorage.setItem("yes",JSON.stringify(user));
            this.router.navigate(['/dashboard']);
          } 
      }
    } else {
      console.log("No hay nada");
    }

   
      
    // if (storeData) {
    //   this.data = JSON.parse(storeData)
    // } else {
    //   console.log("El localstorage Fallo"); 
    
    //   this.data.push(values);
    //   localStorage.setItem('users',JSON.stringify(this.data))
    //   console.log("Termine");
      
    // }

    // this.router.navigate(['/dashboard']);
  }

}
