import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { PizzasService } from './pizzas.service';
import { Pizza } from '../../models/Pizza';

@Component({
  selector: 'pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {
  public pizzas: Array<Pizza>;

  constructor(private pizzasService: PizzasService) { }

  ngOnInit() {
    this.pizzasService.pizzas().subscribe(
      next => this.pizzas = <Array<Pizza>>next,
      error => console.log(error),
    )
  }

}
