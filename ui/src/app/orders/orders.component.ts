import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/Order';
import { OrdersService } from './orders.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders: Array<Order>;

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.ordersService.orders().subscribe(
      next => this.orders = <Array<Order>>next,
      error => console.log(error),
    )
  }

}
