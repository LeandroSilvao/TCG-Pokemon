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
    if (
      decks.findIndex(
        (dk) => dk.name.toLocaleLowerCase() === deck.name.toLocaleLowerCase()
      ) !== -1
    ) {
      alert('Ja existe um baralho com esse nome');
      return false;
    }
    decks.push(deck);
    sessionStorage.setItem(this.keyDecks, JSON.stringify(decks));
    return true;
  };

  public deleteDeck = (deck: Deck) => {
    const decks = this.getDecks();
    const filtered = decks.filter((dk) => dk.name !== deck.name);
    sessionStorage.setItem(this.keyDecks, JSON.stringify(filtered));
  };

  public updateDeck = (deck: Deck) => {
    const decks = this.getDecks();
    const mapped = decks.map((dk) => {
      if (dk.id === deck.id) return { ...dk, ...deck };
      return dk;
    });
    sessionStorage.setItem(this.keyDecks, JSON.stringify(mapped));
  };
}
