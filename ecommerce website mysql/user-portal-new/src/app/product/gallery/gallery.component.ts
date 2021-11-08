import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  products = []
  constructor(
    private productService : ProductService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.loadProducts()
  }
  
  loadProducts(){
    this.productService
    .getProducts()
    .subscribe( (response:any)=>{
      if(response['status'] == 'success'){
        this.products = response['data']
        const data = response['data']
        // console.log(data)
      }else{
        console.log(response['error'])
      }
  })
}
 
  addToCart(product:any){

  }
}
