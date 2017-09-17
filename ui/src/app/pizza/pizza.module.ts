import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './pizza.component';
import { PizzaService } from './pizza.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PizzaComponent,
  ],
  providers: [
    PizzaService
  ],
  exports: [
    PizzaComponent,
  ]
})
export class PizzaModule { }
