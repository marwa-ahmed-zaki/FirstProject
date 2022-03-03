import { Component, OnInit } from '@angular/core';
import { PostListServiceService } from 'src/service/post-list-service.service';

@Component({
  selector: 'app-get-all-posts',
  templateUrl: './get-all-posts.component.html',
  styleUrls: ['./get-all-posts.component.scss']
})
export class GetAllPostsComponent implements OnInit {

  constructor(private list:PostListServiceService) { }
  productList: any = [];
  

  ngOnInit(): void {
     this.list.returnRroduct().subscribe(data => 
      {
        this.productList = data
      })
  }

}
