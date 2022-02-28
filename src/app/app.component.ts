import { Component } from '@angular/core';

@Component({
  //selector: 'app-root',
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
 // What are decorators?
/*Decorators are a design pattern that is used to separate modification or decoration of a class 
without modifying the original source code. In AngularJS, decorators are functions that allow a 
service, directive or filter to be modified prior to its usage.*/
//And why we need @component() function in the component.ts file.

})
export class AppComponent {
  title = 'FirstProject';
}
