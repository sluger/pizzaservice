import { Component, OnInit } from '@angular/core';
import { PizzaWithExtra } from '../../models/PizzaWithExtra';
import { ShoppingCartService } from './shopping-cart.service';
import { Order } from '../../models/Order';
import { OrdersService } from '../orders/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public cart: Order;
  public name: string;
  public email: string;

  constructor(
    private cartService: ShoppingCartService,
    private ordersService: OrdersService,
    private router: Router) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  public removeItem(index: number) {
    this.cart.pizzas.splice(index, 1);
    this.cartService.removeItem(index);
  }

  public order() {
    let order = this.cartService.order(this.name, this.email);
    this.ordersService.order(order).subscribe(
      next => {
        this.cartService.clear();
        this.router.navigate(['/orders']);
      },
      error => console.log(error)
    );
  }
}
