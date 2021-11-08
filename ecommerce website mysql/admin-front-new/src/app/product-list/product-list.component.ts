import { ProductListService } from './../product-list.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = []
  constructor(
    private productListService : ProductListService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.loadProducts()
  }
  
  loadProducts(){
    this.productListService
    .getProducts()
    .subscribe( response=>{
      if(response['status'] == 'success'){
        this.products = response['data']
        const data = response['data']
        // console.log(data)
      }else{
        console.log(response['error'])
      }
  })
}

toggelActive(product){
  // console.log(product)
  this.productListService
  .toggelActiveStatus(product)
  .subscribe(response =>{
    if(response['status'] == 'success'){
      this.loadProducts()
    }else{
      console.log(response['error'])
    }
  })
}

 onEdit(product){
    console.log(product['productId'])
    this.router.navigate(['/product-add'],{queryParams:{productId: product['productId']}})
 }

 uploadImage(product){
  this.router.navigate(['/product-upload-image'],{queryParams:{productId: product['productId']}})
 }

 addProduct(){
  this.router.navigate(['/product-add'])
 }
}
