import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Resultado } from '../interfaces/pokeapi';
import { Pokemon } from '../interfaces/pokemon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  users:String='';
  
  constructor(private pokemonService:ApiService){}

  listaPokemon:Resultado[] = []
  // recibe lo que trae el endpoint del pokemon seleccionado
  pokemonSeleccionado?:Pokemon

  ngOnInit(): void {
    this.cargarLista();
    this.pokemonService.getById("1");
  }

  async cargarLista(){
    // indicamos que tome todo lo de esta lista
    this.listaPokemon =  [...this.listaPokemon,  ...await this.pokemonService.getByPage()];
    console.log(this.listaPokemon);

  }

  // Recibe el ID del hijo mediante el Output
  async tarjeraClickeada(id:String){
    console.log(id);
    this.pokemonSeleccionado = await this.pokemonService.getById(id);
  }

}
