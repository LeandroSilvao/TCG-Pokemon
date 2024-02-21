import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Pokemon, PokemonResponse } from '../../types/pokemon.type';
import DecksService from '../../services/decks';
@Component({
  selector: 'formdeck-component',
  templateUrl: './form-deck.component.html',
})
export class FormDeckComponent {
  @Input() pokemons: PokemonResponse | undefined;
  @Input() name_deck: string = '';
  @Input() deck: Array<Pokemon> = [];

  constructor(private deckService: DecksService) {}

  public setDeck(pokemon: Pokemon | undefined, include: boolean) {
    if (!pokemon) return pokemon;
    if (include) {
      if (Array.isArray(this.deck)) this.deck.push(pokemon);
      else this.deck = [{ ...pokemon }];
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
    this.deckService.setDecks({ name: this.name_deck, pokemons: this.deck });
    this.clearState();
  }

  private clearState() {
    this.name_deck = '';
    this.deck = [];
  }

  onWheel(event: WheelEvent): void {
    if (event.deltaY > 0) document.getElementById('scroll')!.scrollLeft += 40;
    else document.getElementById('scroll')!.scrollLeft -= 40;
  }

  getLengthSuperType() {
    return this.deck.filter((pokemon) => pokemon.supertype).length;
  }

  getLengthUniqueType() {
    return this.deck.filter((pokemon) => pokemon.types).length;
  }
}
