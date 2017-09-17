import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartService } from './shopping-cart.service';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
  ],
  declarations: [
    ShoppingCartComponent,
  ],
  exports: [
    ShoppingCartComponent,
  ],
  providers: [
    ShoppingCartService,
  ]
})
export class ShoppingCartModule { }
