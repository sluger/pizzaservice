import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'incredients'
})
export class IncredientsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.map(v => v.charAt(0).toUpperCase() + v.slice(1)).join(", ");
  }

}
