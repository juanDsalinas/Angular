import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Resultado } from 'src/app/interfaces/pokeapi';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-tarjeta-pokemon',
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrls: ['./tarjeta-pokemon.component.css']
})
export class TarjetaPokemonComponent implements OnChanges {
  
  constructor(private pokemonService:ApiService){}

  ngOnChanges(): void {
    this.extraerInfo()
  }
  // Indicamos que puede recibir data desde el padre
  @Input() data?:Resultado

  // Indicamos que el tipo de dato a devolver es de tipo String
  @Output() clickeado = new EventEmitter<String>();
  id:String = "0";

  

  extraerInfo(){
    if (this.data) {
      
      this.id = this.data.url.substring(34,this.data.url.length-1);
      // se lo pasamos al endpoint para realizar la busqueda por ID
      // y poder sacar el id y traer todo lo del pokemon
      
      console.log(this.id);
      
      this.pokemonService.getById(this.id);
    }
  }

}
