import { Component, Input, OnInit } from '@angular/core';
import DecksService from '../../services/decks';
import { Deck } from '../../types/decks.type';
import PokemonService from '../../services/pokemon';
import { Pokemon, PokemonResponse } from '../../types/pokemon.type';
import { Output, EventEmitter } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'decks-component',
  templateUrl: './decks.component.html',
})
export class DecksComponent implements OnInit {
  @Input() pokemons: Pokemon[] | undefined;
  @Output() view = new EventEmitter<'form' | 'decks'>();

  public name: string;
  public decks: Deck[] = [];
  public deck: Deck | undefined;

  constructor(
    private deckService: DecksService,
    private pokemonService: PokemonService
  ) {
    this.name = '';
  }

  async ngOnInit() {
    this.loadDecks();
  }

  private loadDecks() {
    this.decks = this.deckService.getDecks();
  }

  public DeckChangeView(view: 'form' | 'decks') {
    this.clearState();
    this.loadDecks();
    this.view.emit(view);
  }

  deleteDeck(deck: Deck) {
    this.deckService.deleteDeck(deck);
    this.decks = this.deckService.getDecks();
  }

  public selectDeck(deck: Deck) {
    this.deck = deck;
  }

  public clearState() {
    // this.name = '';
    // this.decks = [];
    this.deck = undefined;
  }

  getLengthSuperType(deck: Deck) {
    const groupedTypes = _.groupBy(deck?.pokemons, (pokemon) => pokemon.types);
    const formated = Object.entries(groupedTypes).map(([key, value], i) => {
      return { key, value: value.length };
    });
    return formated;
  }
}
