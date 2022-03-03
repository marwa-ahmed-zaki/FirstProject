import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { DataComponentComponent } from './data-component/data-component.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import{HttpClientModule} from '@angular/common/http';
import { UsersListComponent } from './users-list/users-list.component';
import { GetAllProductComponent } from './get-all-product/get-all-product.component';
import { GetAllPostsComponent } from './get-all-posts/get-all-posts.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ProductsComponent,
    DataComponentComponent,
    UsersComponent,
    PostsComponent,
    HomeComponent,
    UsersListComponent,
    GetAllProductComponent,
    GetAllPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule , 
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
