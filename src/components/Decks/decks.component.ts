import { Component, OnInit } from '@angular/core';
import DecksService from '../../services/decks';
import { Deck } from '../../types/decks.type';
@Component({
  selector: 'decks-component',
  templateUrl: './decks.component.html',
})
export class DecksComponent implements OnInit {
  public name: string;
  public decks: Deck[] = [];

  constructor(private deckService: DecksService) {
    this.name = '';
  }

  ngOnInit(): void {
    this.decks = this.deckService.getDecks();
    console.log(this.decks);
  }
}
