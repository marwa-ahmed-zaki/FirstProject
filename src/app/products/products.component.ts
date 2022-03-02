import { Component, OnInit } from '@angular/core';
import { Iproduct , Icategory , DiscountOffers } from '../Shared Classes and types/SharedClasses';
import { ProductServiceService } from '../services/product-service.service';


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
 // ProductServiceService: Iproduct[];
 // productServiceData: any;



  constructor(private productServiceData:ProductServiceService) 
  {
    this.storeName="Marwa Store name"
    this.storeLogo="/assets/img/angular.png"
    this.clientName="Marwa (client name )"
    this.isPurshased=true
    this.ProductList=[{id:2,name:"Iphone",quantity:52,price:300,img:""} , 
                      {id:1,name:"Iphone",quantity:52,price:300,img:""} ,
                      {id:2,name:"Iphone",quantity:52,price:300,img:""} ,
                      {id:2,name:"Iphone",quantity:52,price:300,img:""}]
    this.Discount =  DiscountOffers.noDiscount
    this.CategoryList =[{id:50,name:"product1"} , {id : 60 , name : "product2"}]

   }

   

  productList:any;  
  ProductID:any;  

   renderValues(){
    return this.productList=this.productServiceData.GetAllProducts();
   }

  ngOnInit(): void {
    this.productList=this.productServiceData.GetAllProducts();
    this.ProductID=this.productServiceData.GetProductById(1);

  }

  purshased():void{
    this.isPurshased= false
  }

  showName(ClientName:any){

    ClientName;
    
  }
}
function getAllProducts() {
  throw new Error('Function not implemented.');
}

