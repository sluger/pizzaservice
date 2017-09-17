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
      this.initCart();
    }
    return JSON.parse(cart);
  }

  private initCart() {
    let emptyCart = {
      pizzas: [],
      name: "",
      address: "",
      total: 0,
    }
    localStorage.setItem('cart', JSON.stringify(emptyCart));
  }

  public addPizzaWithExtras(pizza: Pizza, extras: Array<Extra>) {
    let item: PizzaWithExtra = {
      pizza: pizza,
      extras: extras,
      total: pizza.price + (extras && extras.length ? extras.map(e => e.price).reduce((a, b) => a + b) : 0)
    }
    let cart: Order = this.getCart();
    cart.pizzas.push(item);
    cart.total = this.computeTotal(cart.pizzas);
    this.updateCart(cart);
  }

  public removeItem(index: number) {
    let cart = this.getCart();
    cart.pizzas.splice(index);
    cart.total = this.computeTotal(cart.pizzas);
    this.updateCart(cart);
  }

  public clear() {
    localStorage.clear();
    this.initCart();
  }

  public computeTotal(items: Array<PizzaWithExtra>) {
    return items && items.length ? items.map(i => i.total).reduce((a, b) => a + b) : 0;
  }

  public order(name: string, email: string): Order {
    let cart = this.getCart();
    cart.name = name;
    cart.address = email;
    this.updateCart(cart);
    return cart;
  }

  private updateCart(cart: Order) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
