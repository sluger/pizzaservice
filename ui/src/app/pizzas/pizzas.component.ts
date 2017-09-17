import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { PizzasService } from './pizzas.service';
import { Pizza } from '../../models/Pizza';
import { Router } from '@angular/router';


@Component({
  selector: 'pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  public pizzas: Array<Pizza>;

  constructor(private pizzasService: PizzasService, 
    private router: Router) { }

  ngOnInit() {
    this.pizzasService.pizzas().subscribe(
      next => this.pizzas = <Array<Pizza>>next,
      error => console.log(error),
    )
  }

  public goToPizza(pizza: Pizza) {
    let pizzaId = pizza ? pizza.id : null;
    this.router.navigate(['/pizzas', { id: pizza.id }]);
  }

}
