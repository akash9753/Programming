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
}
