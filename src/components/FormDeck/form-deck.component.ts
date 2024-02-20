import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonResponse } from '../../types/pokemon.type';

@Component({
  selector: 'formdeck-component',
  providers: [],
  templateUrl: './form-deck.component.html',
})
export class FormDeckComponent implements OnInit {
  @Input() pokemons: PokemonResponse | undefined;

  title = 'FORMULARIO DECK';
  public name_deck: string;
  public deck: Pokemon[];

  constructor() {
    this.name_deck = '';
    this.deck = [];
  }
  ngOnInit() {
    console.log("RENDERIZOU")
  }

  setName(name: string) {
    this.name_deck = name;
  }

  setDeck(pokemon: Pokemon) {
    console.log('PUSH');
    
    // console.log(this.deck)
    // this.deck.push(pokemon);
  }

  submit() {
    console.log(this.deck);
    console.log(this.name_deck);
  }
}
