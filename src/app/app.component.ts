import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import PokemonService from '../services/pokemon';
import { PokemonResponse } from '../types/pokemon.type';
import { FormDeckModule } from '../components/FormDeck/form-deck.module';
import { CommonModule } from '@angular/common';
import { DecksModule } from '../components/Decks/decks.module';

@Component({
  selector: 'root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormDeckModule,
    DecksModule,
    CommonModule,
  ],
  providers: [PokemonService],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  pokemons: PokemonResponse | undefined;

  view: 'form' | 'decks' | undefined = 'decks';
  constructor(private pokemon: PokemonService) {}

  getCards = async () => {
    const fromSessionStorage = sessionStorage.getItem('pokemons');
    if (fromSessionStorage !== null) {
      this.pokemons = JSON.parse(fromSessionStorage);
    } else {
      const cards = await this.pokemon.getCards();
      sessionStorage.setItem('pokemons', JSON.stringify(cards.data));
      this.pokemons = cards.data;
    }
  };

  ngOnInit() {
    this.getCards();
  }

  changeView(view: 'form' | 'decks') {
    this.view = view;
  }
}
