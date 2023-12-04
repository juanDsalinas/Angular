import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username:String=''
  data:Array<any>=[];
  estado:boolean=false;

  // router en el constructor para que nos permita navegar entre rutas
  constructor(private router:Router){
    this.data
  }

  change(values:any){
    // Traemos el estado del localstorage ya que la variable se reinicia por el envio del formulario
    const valida = localStorage.getItem('state')
    // la asignamos
    if(valida){
        this.estado = JSON.parse(valida)
    }

    // si es false significa que la variable no existe en el localstorage
    if (this.estado === false) {
      console.log(values)
      // metemos la data en el array vacio
      this.data.push(values)
      console.log(this.data);
      // subimos la data al localstorage
      localStorage.setItem('users',JSON.stringify(this.data))
      this.estado = true;
      // subimos el estado al localstorage
      localStorage.setItem('state',JSON.stringify(this.estado))
      console.log("YA ES FALSE");
      
    } else {
      // nos trae la data
      const storeData = localStorage.getItem('users');
      console.log("YA ES TRUE");
      
      if (storeData) {
        this.data = JSON.parse(storeData)
      } else {
        console.log("El localstorage Fallo"); 
      }
      // guardamos la data en el array
      this.data.push(values);
      // la enviamos al localstorage
      localStorage.setItem('users',JSON.stringify(this.data))
      console.log("Termine");
      
    }
    // redireccionamos
    this.router.navigate(['/']);
  }


}
