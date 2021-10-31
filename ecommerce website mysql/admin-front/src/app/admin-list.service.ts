import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminListService {
   url = 'http://localhost:3000/admin'
  constructor(
    private httpClient : HttpClient
  ) { }

  onSignin(email:string,password:string){
       const body = {
         email : email,
         password: password,
       }
       return this.httpClient.post(this.url + '/signin', body)
  }
}
