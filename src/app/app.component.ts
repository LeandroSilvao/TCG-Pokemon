import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import PokemonService from '../services/pokemon';
import { Pokemon, PokemonResponse } from '../types/pokemon.type';
import { FormDeckModule } from '../components/FormDeck/form-deck.module';
import { CommonModule } from '@angular/common';
import { DecksModule } from '../components/Decks/decks.module';
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule
  ],
  providers: [PokemonService],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  pokemons: Pokemon[] | undefined;
  public view: 'form' | 'decks' | undefined = 'decks';
  constructor(private pokemon: PokemonService) {}

  async ngOnInit() {
    this.pokemon.getCards().then((res) => {
      this.pokemons = res;
    });
  }

  public appChangeView(view: 'form' | 'decks') {
    this.view = view;
  }
}
