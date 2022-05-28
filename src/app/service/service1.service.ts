import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }
  wishcnt=0;
  
  addWishList(){
    this.wishcnt++;
  }
}
