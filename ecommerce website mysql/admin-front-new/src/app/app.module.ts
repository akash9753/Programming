import { BrandService } from './brand.service';
import { CategoryService } from './category.service';
import { OrderListService } from './order-list.service';
import { ProductListService } from './product-list.service';
import { UserListService } from './user-list.service';
import { AdminListService } from './admin-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductAddComponent } from './product-add/product-add.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ProductListComponent,
    OrderListComponent,
    UserListComponent,
    SigninComponent,
    SignupComponent,
    ProductAddComponent,
    UploadImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AdminListService,
    UserListService,
    ProductListService,
    OrderListService,
    CategoryService,
    BrandService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
