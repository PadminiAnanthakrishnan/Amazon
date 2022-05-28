import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountedpipe'
})
export class DiscountedpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
