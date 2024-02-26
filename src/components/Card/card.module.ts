import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
  imports: [NgOptimizedImage],
})
export class CardModule {}
