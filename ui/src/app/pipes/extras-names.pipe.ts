import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extrasNames'
})
export class ExtrasNamesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.map(v => v.name.charAt(0).toUpperCase() + v.name.slice(1)).join(", ");
  }

}
