import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { PizzasComponent } from './pizzas.component';
import { PizzasService } from './pizzas.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PizzasComponent,
  ],
  imports: [
      CommonModule,
      HttpModule,
  ],
  providers: [
    PizzasService,
  ],
  exports: [
      PizzasComponent,
  ]
})
export class PizzasModule { }
