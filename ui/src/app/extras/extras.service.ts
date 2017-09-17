import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Extra } from '../../models/Extra';

@Injectable()
export class ExtrasService {

  constructor(private http: Http) { }

  public extras(): Observable<Array<Extra>> {
    return this.http.get('http://localhost:5000/api/v1/extras')
      .map((res) => { return res.json() })
      .catch((error) => { return error.message || 'error'; });
  }
}
