import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    GalleryComponent, CartComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule
  ],
  providers:[ProductService]
})
export class ProductModule { }
