import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './pizza.component';
import { PizzaService } from './pizza.service';
import { ExtrasModule } from '../extras/extras.module';


@NgModule({
  imports: [
    CommonModule,
    ExtrasModule,
  ],
  declarations: [
    PizzaComponent,
  ],
  providers: [
    PizzaService,
  ],
  exports: [
    PizzaComponent,
  ]
})
export class PizzaModule { }
