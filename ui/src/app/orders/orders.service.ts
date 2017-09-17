import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Order } from '../../models/Order';

@Injectable()
export class OrdersService {

  constructor(private http: Http) { }

  public orders(): Observable<Array<Order>> {
    return this.http.get('http://localhost:5000/api/v1/orders')
      .map((res) => { return res.json() })
      .catch((error) => { return error.message || 'error'; });
  }

  public order(order: Order): Observable<Array<Order>> {
    return this.http.post('http://localhost:5000/api/v1/orders', order)
      .map((res) => { return res.json() })
      .catch((error) => { return error.message || 'error'; });
  }
}
