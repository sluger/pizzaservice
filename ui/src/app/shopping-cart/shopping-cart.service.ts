import { Injectable } from '@angular/core';
import { Pizza } from '../../models/Pizza';
import { Extra } from '../../models/Extra';
import { PizzaWithExtra } from '../../models/PizzaWithExtra';
import { Order } from '../../models/Order';

@Injectable()
export class ShoppingCartService {

  constructor() { }

  public getCart(): Order {
    let cart = localStorage.getItem('cart');
    if (!cart) {
      let emptyCart = {
        pizzas: [],
        name: "",
        address: "",
        total: 0,
      }
      localStorage.setItem('cart', JSON.stringify(emptyCart));
    }
    return JSON.parse(cart);
  }

  public addPizzaWithExtras(pizza: Pizza, extras: Array<Extra>) {
    let item: PizzaWithExtra = {
      pizza: pizza,
      extras: extras,
      total: pizza.price + (extras && extras.length ? extras.map(e => e.price).reduce((a, b) => a + b) : 0)
    }
    let cart: Order = this.getCart();
    cart.pizzas.push(item);
    console.log(cart)
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  public removeItem(index: number) {
    let cart = this.getCart();
    cart.pizzas.splice(index);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
