import { Component, OnInit } from '@angular/core';
import { Iproduct , Icategory , DiscountOffers } from '../Shared Classes and types/SharedClasses';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  storeName : string
  storeLogo:string
  clientName:string
  isPurshased:boolean
  Discount : DiscountOffers 
  ProductList:Iproduct[]
  CategoryList:Icategory[]



  constructor() 
  {
    this.storeName="Marwa Store name"
    this.storeLogo="/assets/angular.png"
    this.clientName="Marwa client name"
    this.isPurshased=true
    this.ProductList=[{id:2,name:"Iphone",quantity:52,price:300,img:""}]
    this.Discount =  DiscountOffers.noDiscount
    this.CategoryList =[{id:50,name:"products"}]

   }

  ngOnInit(): void {
  }

}
