import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../types/pokemon.type';

@Component({
  selector: 'card-component',
  providers: [],
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() pokemon: Pokemon | undefined;
  @Input() setDeck: (pokemon: Pokemon) => void = () => {};

  constructor() {}
  title = 'CARD POKEMON';

  ngOnInit() {}

  clickOnCard() {
    if(this.pokemon) this.setDeck(this.pokemon);
  }
}
