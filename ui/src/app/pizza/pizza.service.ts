import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Pizza } from '../../models/Pizza';

@Injectable()
export class PizzaService {

  constructor(private http: Http) { }

  public pizza(id: string): Observable<Pizza> {
    return this.http.get('http://localhost:5000/api/v1/pizzas/' + id)
      .map((res) => { return res.json() })
      .catch((error) => { return error.message || 'error'; });
  }
}
