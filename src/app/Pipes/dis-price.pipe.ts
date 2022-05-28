import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disPrice'
})
export class DisPricePipe implements PipeTransform {

  transform(value: number, d: number): unknown {
   // const productprice = p;
    const discountedprice = d;
    console.log(value,value)
    return value-(value/100)*discountedprice ;
  }

}
