import { Component, OnInit } from '@angular/core';
import { MyCartCountService } from 'src/app/service/my-cart-count.service';
import { Service1Service } from 'src/app/service/service1.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  constructor(public cartcount:MyCartCountService) {
  
  }
  

  ngOnInit(): void {
  }
  searchtxt="";
  logoexpansion=".in";
  locaddr1="Hello"
  locaddr2="Select the Location";
  account1="Hello,Sign in";
  account2="Accounts & Lists";
  return1="Returns";
  return2="& orders";
  wishclass="fa fa-heart wish-list-icon";  
  cartcnt=0;
  wishcnt=0;
  addwish(){
    this.wishcnt +=1
  }
}
