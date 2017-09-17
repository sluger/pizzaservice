import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersService } from './orders.service';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [
    OrdersComponent,
  ],
  providers: [
    OrdersService,
  ],
  exports: [
    OrdersComponent,
  ]
})
export class OrdersModule { }
