import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/users-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {



constructor(private list:UsersServiceService) { }
usersList: any = [];


ngOnInit(): void {
   this.list.returnUsers().subscribe(data => 
    {
      this.usersList = data
    })
}
}