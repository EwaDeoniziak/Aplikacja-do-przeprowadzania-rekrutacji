import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], propertyName: string): any[] {
    if (propertyName) {
      value.sort((a: any, b: any) =>
      {
         if(a[propertyName] <= b[propertyName]) {
            return 1;
         }
         else {
           return -1;
         }
      });
    }
    else
      return value;
  }
}
