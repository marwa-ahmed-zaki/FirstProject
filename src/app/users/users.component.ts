import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/users-service.service';
import { IUsers } from '../Shared Classes and types/iusers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private list : UsersServiceService) {  }
  productList: any;
  errorMassage: any;

  ngOnInit(): void {
    this.list.returnUsers().subscribe(
      (data) =>{this.productList = data}
    )
  }

}
