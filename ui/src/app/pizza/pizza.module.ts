import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './pizza.component';
import { PizzaService } from './pizza.service';
import { ExtrasModule } from '../extras/extras.module';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    ExtrasModule,
    PipesModule,
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
