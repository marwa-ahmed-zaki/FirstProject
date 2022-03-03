import { Component, OnInit } from '@angular/core';
import { ProductListServiceService } from 'src/service/product-list-service.service';

@Component({
  selector: 'app-get-all-product',
  templateUrl: './get-all-product.component.html',
  styleUrls: ['./get-all-product.component.scss']
})
export class GetAllProductComponent implements OnInit {

  constructor(private list:ProductListServiceService) { }
  productList: any = [];
  

  ngOnInit(): void {
     this.list.returnRroduct().subscribe(data => 
      {
        this.productList = data
      })
  }

}
