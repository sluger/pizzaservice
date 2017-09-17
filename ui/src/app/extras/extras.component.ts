import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Extra } from '../../models/Extra';
import { ExtrasService } from './extras.service';

@Component({
  selector: 'extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {
  public extras: Array<Extra>;
  
    constructor(private extrasService: ExtrasService) { }
  
    ngOnInit() {
      this.extrasService.extras().subscribe(
        next => this.extras = <Array<Extra>>next,
        error => console.log(error),
      )
    }

}
