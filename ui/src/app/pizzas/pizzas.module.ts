import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { PizzasComponent } from './pizzas.component';
import { PizzasService } from './pizzas.service';

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
