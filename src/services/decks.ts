import { Injectable } from '@angular/core';
import { Deck } from '../types/decks.type';

@Injectable()
export default class DecksService {
  private keyDecks = 'decks';
  constructor() {}

  public getDecks = (): Array<Deck> => {
    const decks = sessionStorage.getItem(this.keyDecks);
    if (decks) return JSON.parse(decks);
    return [];
  };

  public setDecks = (deck: Deck) => {
    const decks = this.getDecks();
    decks.push(deck);
    sessionStorage.setItem(this.keyDecks, JSON.stringify(decks));
  };
}
