import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resultado} from '../interfaces/pokeapi'
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor() { }

  async getByPage(): Promise<Resultado[]>{
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=300&offset=0")
    // lee el json dentro de la response
    const resJson = await res.json();
    console.log(resJson);
    if (resJson.results.length > 0) {
      return resJson.results
    }else {
      return []
    }
  }

  
  // Prueba
  async getByType(type:String):Promise<Resultado[]>{
    const res = await fetch(`https://pokeapi.co/api/v2/type/${type}/`);
    // lee el json dentro de la response
    const resJson = await res.json();
    console.log(resJson.pokemon);
    return resJson.pokemon

  }
  
  // 
  
  
  // Devuelve el Pokemon
  async getById(id:String): Promise<Pokemon>{
    // https://pokeapi.co/api/v2/pokemon/
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    // lee el json dentro de la response
    const resJson = await res.json();
    console.log(resJson);
    return resJson
    // this.pokemonService.getById(this.id)
  }

  getDescription(){
  }

}