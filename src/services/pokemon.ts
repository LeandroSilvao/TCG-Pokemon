import { Injectable } from '@angular/core';
import axios from 'axios';
import { PokemonResponse } from '../types/pokemon.type';

@Injectable()
export default class PokemonService {
  private url: string = 'https://api.pokemontcg.io/v2/';
  private api_key: string = '66821ff7-fbe5-42a5-8bbf-db291ab42d12';
  private headers: object;
  constructor() {
    this.headers = { 'X-Api-Key': this.api_key };
  }

  public getCards = () => {
    return axios.get<PokemonResponse>(`${this.url}cards`, { headers: this.headers });
  };
}
