import { NgModule } from '@angular/core';
import { DecksComponent } from './decks.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { CardModule } from '../Card/card.module';
import { CommonModule } from '@angular/common';
import DecksService from '../../services/decks';
import { FormDeckModule } from '../FormDeck/form-deck.module';
import PokemonService from '../../services/pokemon';

@NgModule({
  declarations: [DecksComponent],
  exports: [DecksComponent],
  providers: [DecksService, PokemonService],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CardModule,
    CommonModule,
    FormDeckModule,
  ],
})
export class DecksModule {}
