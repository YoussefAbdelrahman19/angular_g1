import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToEgy'
})
export class UsdToEgyPipe implements PipeTransform {

  transform(value: any, rate:any=24): any {
    return value*rate;
  }

}
