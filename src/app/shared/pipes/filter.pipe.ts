import { Pipe, PipeTransform } from '@angular/core';
import { Application } from '../interfaces';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Application[], propertyName: string, propertyValue: any): Application[] {
    if(!propertyName || !propertyValue){
      return value;
    }
    else {
    return value.filter( el => {
      return el[propertyName] === propertyValue;
    })};
  }

}
