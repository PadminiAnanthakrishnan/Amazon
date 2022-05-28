import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MyCartCountService } from 'src/app/service/my-cart-count.service';
import { Service1Service } from 'src/app/service/service1.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  constructor(public cartcount:MyCartCountService) {
    
   } 

  ngOnInit(): void {
  }
  addCart(){
    this.cartcount.addCartCount();
  }
  cartbtnname="Add to Cart";
  wishbtnname="Buy Now";

  Products=[
    { 
      brandname:"Hyndai",
      productid:1,
      productname:"Vechile Tyre",
      imagename:"tyre.jpg",
      price:2500.00,
      discount:20,
      wishcount:false
     },
    { 
      brandname:"Lenovo",
      productid:2,
      productname:"Laptop",
      imagename:"laptop.jpg",
      price:60589.00,
      discount:35,
      wishcount:false
    },
    {
      brandname:"Hyndai",
      productid:3,
      productname:"Helmat",
      imagename:"helmat.jpg",
      price:2599.00,
      discount:65,
      wishcount:false
    },
    { 
      brandname:"Philips",
      productid:4,
      productname:"Vaccum Cleaner",
      imagename:"vaccum.jpg",
      price:12999.00,
      discount:10,
      wishcount:false
    },
    { 
      brandname:"Lenovo",
      productid:5,
      productname:"Laptop",
      imagename:"laptop.jpg",
      price:60589.00,
      discount:35,
      wishcount:false
    },
    { 
      brandname:"Hyndai",
      productid:6,
      productname:"Helmat",
      imagename:"helmat.jpg",
      price:2599.00,
      discount:65,
      wishcount:false
    },
    { 
      brandname:"Philips",
      productid:7,
      productname:"Vaccum Cleaner",
      imagename:"vaccum.jpg",
      price:12999.00,
      discount:10,
      wishcount:false
    }];
    pid=0;
    wishicon:boolean=true;  

    wishlist(){      
      if(this.wishicon==false){
        this.wishicon=true;     
      }else{
        this.wishicon=false;
      }
    }
    

}
