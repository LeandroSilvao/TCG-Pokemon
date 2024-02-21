import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../types/pokemon.type';

@Component({
  selector: 'card-component',
  providers: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() pokemon: Pokemon | undefined;
  title = 'CARD POKEMON';
}
