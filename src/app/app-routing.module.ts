import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GetAllPostsComponent } from './get-all-posts/get-all-posts.component';
import { GetAllProductComponent } from './get-all-product/get-all-product.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'products' , component : GetAllProductComponent } , 
  {path:'home' , component : AppComponent } , 
  {path:'users' , component : UsersListComponent } , 
  {path:'posts' , component : GetAllPostsComponent } , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
