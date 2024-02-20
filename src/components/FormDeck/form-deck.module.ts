import { NgModule } from '@angular/core';
import { FormDeckComponent } from './form-deck.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { CardModule } from '../Card/card.module';

@NgModule({
  declarations: [FormDeckComponent],
  exports: [FormDeckComponent],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CardModule,
  ],
})
export class FormDeckModule {}
