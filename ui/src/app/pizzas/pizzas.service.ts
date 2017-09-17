import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PizzasService {

  constructor(private http: Http) { }

  public pizzas(): Observable<any[]> {
    return this.http.get('http://localhost:5000/api/v1/pizzas')
      .map((res) => { return res.json() })
      .catch((error) => { return error.message || 'error'; });
  }
}
