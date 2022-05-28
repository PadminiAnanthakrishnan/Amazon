import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-silde-container',
  templateUrl: './silde-container.component.html',
  styleUrls: ['./silde-container.component.css']
})
export class SildeContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //slide status
  slidestatus="slide-container";
  slidelist="slide-list";


  sildeimages = [{
    image : "electronucs.png",
    title : "Electronics"
  },
{
  image : "shopify.png",
  title : " Shopping"
},
{
  image : "echo-hero.png",
  title : "Speakers"
}]
sildeno:number=1;

forward(){
  if(this.sildeno<3){
    this.sildeno = this.sildeno + 1;
  }else{
    this.sildeno = 1
  }
  this.slidelist ="slide-list"
}
backward(){
  console.log(this.sildeno)
  if(this.sildeno==1){
    this.sildeno = 3;
  }else{
    this.sildeno = this.sildeno - 1
  }  
}
}
