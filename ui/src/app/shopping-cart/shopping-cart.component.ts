import { Component, OnInit } from '@angular/core';
import { PizzaWithExtra } from '../../models/PizzaWithExtra';
import { ShoppingCartService } from './shopping-cart.service';
import { Order } from '../../models/Order';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public cart: Order;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  public removeItem(index: number) {

    console.log(index);
    this.cart.pizzas.splice(index, 1);
    this.cartService.removeItem(index);
  }
}
