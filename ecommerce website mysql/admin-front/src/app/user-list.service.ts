import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  url = 'http://localhost:3000/admin'
  constructor( private HttpClient : HttpClient) { }

  getUsers(){
    //add the token 
    const httpOptions = {
      headers: new HttpHeaders({
        token:sessionStorage['token']
      })
    }
   return this.HttpClient.get(this.url + '/userList',httpOptions )
  }
  toggelActiveStatus(user){
    console.log(user)
    const httpOptions = {
      headers: new HttpHeaders({
        token:sessionStorage['token']
      })
  }
  const body = {
    status: user['active'] == 1 ? 0 : 1
  }
  return this.HttpClient.put(this.url + '/toggel-active/' + user['userId'], body, httpOptions )
}
}
