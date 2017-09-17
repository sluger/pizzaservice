import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PizzaComponent } from './pizza.component';
import { PizzaService } from './pizza.service';
import { ExtrasModule } from '../extras/extras.module';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
