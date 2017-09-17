import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { PizzasComponent } from './pizzas.component';
import { PizzasService } from './pizzas.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PizzasComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
  ],
  providers: [
    PizzasService,
  ],
  exports: [
    PizzasComponent,
  ]
})
export class PizzasModule { }
