import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.scss']
})
export class DataComponentComponent implements OnInit {

  message:string;
  coloring:string;
  constructor() 
  { 
    this.message="";
    this.coloring="";
  }

  showDiv(value:string){
    if(value=="true"){
    this.message="Hello from the true div";
    this.coloring="green";
    }
    else{
    this.message="Hello from false div"
    this.coloring="red";
  }

  }

  ngOnInit(): void {
  }

}
