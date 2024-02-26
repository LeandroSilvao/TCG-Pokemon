import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Pokemon, PokemonResponse } from '../../types/pokemon.type';
import DecksService from '../../services/decks';
import { Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'formdeck-component',
  templateUrl: './form-deck.component.html',
})
export class FormDeckComponent {
  @Input() pokemons: Pokemon[] | undefined;
  @Input() id: string = '';
  @Input() name_deck: string = '';
  @Input() deck: Array<Pokemon> = [];
  @Input() viewMode: 'edit' | 'create' = 'create';
  @Output() view = new EventEmitter<'form' | 'decks'>();

  constructor(private deckService: DecksService) {}

  public setDeck(pokemon: Pokemon | undefined, include: boolean) {
    if (!pokemon) return pokemon;
    if (include) {
      if (Array.isArray(this.deck)) {
        if (this.deck.filter((pk) => pk.name === pokemon.name).length === 4)
          return alert('Já existe 4 pokemons com esse nome no baralho!');
        else this.deck.push(pokemon);
      } else this.deck = [{ ...pokemon }];
    } else {
      const index = this.deck.findIndex((pk) => pk.id === pokemon.id);
      if (index !== -1) this.deck.splice(index, 1);
    }
    return pokemon;
  }

  disableRemoveButton(pokemon: Pokemon) {
    return this.deck.findIndex((pk) => pk.id === pokemon.id) !== -1
      ? false
      : true;
  }

  public submit() {
    let success: boolean = true;
    if (this.viewMode === 'create') {
      success = this.deckService.setDecks({
        id: new Date().getTime().toString(),
        name: this.name_deck,
        pokemons: this.deck,
      });
    } else
      this.deckService.updateDeck({
        id: this.id,
        name: this.name_deck,
        pokemons: this.deck,
      });
    if (success) this.clearState();
  }

  public clearState() {
    this.name_deck = '';
    this.deck = [];
    this.FormDeckChangeView('decks');
  }

  public FormDeckChangeView(view: 'form' | 'decks') {
    this.view.emit(view);
  }

  onWheel(event: WheelEvent): void {
    if (event.deltaY > 0) document.getElementById('scroll')!.scrollLeft += 40;
    else document.getElementById('scroll')!.scrollLeft -= 40;
  }

  getLengthSuperType() {
    const groupedTypes = _.groupBy(this.deck, (pokemon) => pokemon.types);
    const formated = Object.entries(groupedTypes).map(([key, value], i) => {
      return { key, value: value.length };
    });
    return formated;
  }

  getLengthUniqueType() {
    return this.deck.filter((pokemon) => pokemon.types).length;
  }

  checkArrayLength = (array: Array<any> | undefined) => array?.length ?? 0;
}
