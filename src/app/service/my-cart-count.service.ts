import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyCartCountService {
  cartcnt =0;

  addCartCount(){
    this.cartcnt++;
  }
  constructor() { }
}
