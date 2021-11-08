import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  url = 'http://localhost:3000/product'
  constructor(
    private httpClient : HttpClient
  ) { }
  getProducts(){
    const httpOptions = {
      headers: new HttpHeaders({
        token:sessionStorage['token']
      })
    }
   return this.httpClient.get(this.url + '/getAllProduct',httpOptions )
  }
  
  toggelActiveStatus(product){
    console.log(product)
    const httpOptions = {
      headers: new HttpHeaders({
        token:sessionStorage['token']
      })
  }
  const body = {}
  return this.httpClient.put(this.url + `/update-status/ ${product['productId']}/${product['isActive']== 0 ? 1 : 0} `,body, httpOptions )
}

insertProduct( title:string, description:string, price:number, category:number, brand:number){
  const tok = sessionStorage['token']
  console.log(`token : ${tok}`)
  const httpOptions = {
      headers: new HttpHeaders({
      token:sessionStorage['token']
      })
    };
  console.log(`httpOptions : ${httpOptions}`)
  const body = {
    title: title,
    description: description,
    price: price,
    category: category,
    brand : brand
  }
  console.log(`body : ${body.brand}`)
 return this.httpClient.post(this.url + "/create" , body, httpOptions )

}

getProductDetails(productId){
  const httpOptions = {
    headers: new HttpHeaders({
      token:sessionStorage['token']
    })
  }
 return this.httpClient.get(this.url + '/details/' + productId, httpOptions )
}

updateProduct(productId , title:string, description:string, price:number,category:number,brand:number){
   
  const httpOptions = {
    headers: new HttpHeaders({
      token:sessionStorage['token']
    })
  }
  const body = {
    title: title,
    description: description,
    price: price,
    category: category,
    brand:brand
  }
 return this.httpClient.put(this.url + '/' + productId, body, httpOptions )

}

 uploadImage(productId, file){
  const httpOptions = {
    headers: new HttpHeaders({
      token:sessionStorage['token']
    })
  }
  const body = new FormData()
    body.append('image',file)
  
  return this.httpClient.post(this.url + `/upload-image/${productId}`, body, httpOptions )
 }
}
