import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Pizza } from '../../models/Pizza';
import { Extra } from '../../models/Extra';
import { ExtrasService } from '../extras/extras.service';
import { PizzaService } from './pizza.service';

@Component({
  selector: 'pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  public pizza$: Observable<Pizza>;
  public extras: Array<Extra>;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private pizzaService: PizzaService,
    private extrasService: ExtrasService) { }

  ngOnInit() {
    this.pizza$ = this.route.paramMap.switchMap(
      (params: ParamMap) => this.pizzaService.pizza(params.get('id')));
    this.extrasService.extras().subscribe(
      next => this.extras = <Array<Extra>>next,
      error => console.log(error),
    )
  }

  goToPizzas() {
    //this.router.navigate(['/pizzas']);
  }

}
