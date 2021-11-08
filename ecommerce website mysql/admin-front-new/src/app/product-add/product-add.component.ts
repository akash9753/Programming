import { BrandService } from './../brand.service';
import { CategoryService } from './../category.service';
import { ProductListService } from './../product-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  title = ''
  description = ''
  price = 0
  category = 5
  brand = 1

  categories = []
  brands = []

  product : any

  constructor(
    private productService : ProductListService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private categoryService: CategoryService,
    private brandService : BrandService 
    ) { }

  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.queryParams['productId']
    console.log(productId)
    if(productId){
      this.productService
      .getProductDetails(productId)
      .subscribe((response:any) =>{
         if(response['status'] == 'success'){
         const products = response['data']
          
         if(products.length > 0){
           
          this.product = products[0]
          console.log(`getProductDetails :${this.product['brand']['brandId']} `)
           console.log(this.product)
           this.title = this.product['title']
           this.description = this.product['description']
           this.price = this.product['price']
           this.category = this.product['category']['categoryId']
           this.brand = this.product['brand']['brandId']
         }
         }
        })
  }
  this.loadBrands()
  this.loadCategories()

}

onUpdate(){
     if(this.product){
       //edit
       this.productService
       .updateProduct(this.product['productId'], this.title, this.description, this.price,this.category,this.brand)
         .subscribe((response:any) =>{
           if(response['status'] == 'success'){
             alert('information successfully updated')
             this.router.navigate(['/product-list'])
           }
         })
     }else{
       //insert
       this.productService
       .insertProduct( this.title, this.description, this.price,this.category,this.brand,)
         .subscribe((response:any) =>{
           if(response['status'] == 'success'){
             alert('product information saved successfully')
             this.router.navigate(['/product-list'])
           }
         })
     }
     
     }

     loadCategories(){
          this.categoryService
          .getCategories()
          .subscribe((response:any) => {
            if(response['status'] == 'success'){
              this.categories = response['data']
            }
          })
     }

     loadBrands(){
      this.brandService
      .getBrands()
      .subscribe((response:any) => {
        if(response['status'] == 'success'){
          this.brands = response['data']
        }
      })
     }
}

