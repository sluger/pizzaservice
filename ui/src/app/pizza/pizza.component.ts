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
  public selectedExtra: Extra;
  public chosenExtras: Array<Extra> = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private pizzaService: PizzaService,
    private extrasService: ExtrasService) { }

  public ngOnInit() {
    this.pizza$ = this.route.paramMap.switchMap(
      (params: ParamMap) => this.pizzaService.pizza(params.get('id')));
    this.extrasService.extras().subscribe(
      next => {
        this.extras = <Array<Extra>>next;
        this.selectedExtra = (this.extras && this.extras instanceof Array && this.extras.length > 0) ? this.extras[0] : null;
      },
      error => console.log(error),
    )
  }

  public goToPizzas() {
    this.router.navigate(['/pizzas']);
  }

  public onExtraChange(event: Extra) {
    this.selectedExtra = event;
  }

  public addExtra() {
    this.chosenExtras.push(this.selectedExtra);
    console.log(this.chosenExtras);
  }

  public removeExtra(extra: Extra) {
    let index = this.chosenExtras.findIndex((e) => e.name === extra.name);
    this.chosenExtras.splice(index, 1);
  }

  public addToShoppingCart() {
    // TODO: 
  }
}
