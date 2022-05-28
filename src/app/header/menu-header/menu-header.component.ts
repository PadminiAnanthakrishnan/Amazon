import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menus=[
    {menuname:"All", menulink:""},
    {menuname:"Best Sellors", menulink:""},
    {menuname:"Mobiles", menulink:"moblies"},
    {menuname:"Today's Deal", menulink:""},
    {menuname:"Electornics", menulink:""},
    {menuname:"Prime", menulink:""},
    {menuname:"Fasion", menulink:""},
    {menuname:"New Release", menulink:""},
    {menuname:"Books", menulink:""},
    {menuname:"Home & Kitchen", menulink:""},
    {menuname:"Amazon & Pay", menulink:""}
     ];

  submenus=["Men","Women"];
}
