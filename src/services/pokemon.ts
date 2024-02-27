import { Injectable } from '@angular/core';
import axios from 'axios';
import { Pokemon, PokemonResponse } from '../types/pokemon.type';
import _, { set } from 'lodash';
import { environment } from '../environments/environment';

@Injectable()
export default class PokemonService {
  private url: string = environment.api_url;
  private api_key: string = environment.api_key;
  private headers: object;
  private data: Pokemon[] = [];

  constructor() {
    this.headers = { 'X-Api-Key': this.api_key };
  }

  private get = (page = 1, pageSize = 250) => {
    return axios.get<PokemonResponse>(
      `${this.url}cards?page=${page}&pageSize=${pageSize}`,
      {
        headers: this.headers,
      }
    );
  };

  private loopInvoke = async (currentpage = 1): Promise<Pokemon[]> => {
    return new Promise(async (resolve, reject) => {
      console.debug(`GETTIN PAGE: ${currentpage}`);

      const get = await this.get(currentpage);
      const { data, pageSize, totalCount } = get.data;

      this.setOnStorage(currentpage, data);

      //! PARALELIZAÇÃO DE REQUISIÇÕES E SALVAMENTO NO SESSION STORAGE | POREM O SESSION STORAGE NÃO SUPORTE TANTOS DADOS
      // const totalPages = Math.round(totalCount / pageSize) + 1;
      // const arraySequenceNumbers = _.range(currentpage + 1, totalPages);
      // Promise.all(
      //   arraySequenceNumbers
      //     .map(async (page) => {
      //       console.debug(`GETTIN PAGE: ${page}`);
      //       return await this.get(page);
      //     })
      //     .map((page, idx) => {
      //       page.then((res) => {
      //         this.setOnStorage(idx + 1, res.data.data);
      //       });
      //     })
      // );

      resolve(data);
    });
  };

  public getCards = async (): Promise<Pokemon[]> => {
    const fromSessionStorage = sessionStorage.getItem('pokemons');
    if (fromSessionStorage !== null) {
      return JSON.parse(fromSessionStorage);
    } else {
      const cards = await this.loopInvoke();
      return cards;
    }
  };

  public setOnStorage(page = 1, pokemons: Pokemon[]) {
    return sessionStorage.setItem(`pokemons`, JSON.stringify(pokemons));
  }

  //! FUNÇÃO NÃO UTILIZADA DEVIDO AO SESSION STORAGE NÃO SUPORTAR MUITOS DADOS PARA EFETUAR A PAGINAÇÃO
  // public setOnStorage(page = 1, pokemons: Pokemon[]) {
  //   return sessionStorage.setItem(
  //     `pokemons[${page}]`,
  //     JSON.stringify(pokemons)
  //   );
  // }
}
