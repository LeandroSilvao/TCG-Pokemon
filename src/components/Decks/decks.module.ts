import { NgModule } from '@angular/core';
import { DecksComponent } from './decks.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { CardModule } from '../Card/card.module';
import { CommonModule } from '@angular/common';
import DecksService from '../../services/decks';

@NgModule({
  declarations: [DecksComponent],
  exports: [DecksComponent],
  providers: [DecksService],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CardModule,
    CommonModule
  ],
})
export class DecksModule {}
