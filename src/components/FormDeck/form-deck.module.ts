import { NgModule } from '@angular/core';
import { FormDeckComponent } from './form-deck.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import DecksService from '../../services/decks';
import { NgOptimizedImage } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [FormDeckComponent],
  exports: [FormDeckComponent],
  providers: [DecksService],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    NgOptimizedImage,
    MatProgressSpinnerModule
  ],
})
export class FormDeckModule {}
