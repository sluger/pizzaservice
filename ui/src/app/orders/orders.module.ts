import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersService } from './orders.service';

@NgModule({
  imports: [
    CommonModule
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
