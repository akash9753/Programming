import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = []
  constructor(private productListService : ProductListService) { }

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
        console.log(data)
      }else{
        console.log(response['error'])
      }
  })
}
}
