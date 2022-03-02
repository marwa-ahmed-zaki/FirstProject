import { Injectable } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { ProductsComponent } from '../products/products.component';
import { Iproduct } from '../Shared Classes and types/SharedClasses';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productList= 
  [
  {id:1,name:"Samsung",price:6000,avilablty:"out stock"},
  {id:2,name:"iphone",price:4000,avilablty:"stock"},
  {id:3,name:"iphone",price:5000,avilablty:"stock"}
  ]

  constructor() { }


  ProductListID!:any;

  GetProductById(id:any) {

    if(typeof id == 'number')
    {
    
     this.productList.filter((e)=>{
       if(e.id===id){
        this.ProductListID=e;
       }
       
     });
     return this.ProductListID;

    }else{
      return null;
    }



  }
  GetAllProducts(){
    
    return this.productList
  }
}
