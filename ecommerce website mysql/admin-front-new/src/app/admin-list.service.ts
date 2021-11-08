import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminListService implements CanActivate{
   url = 'http://localhost:3000/admin'
  constructor(
    private httpClient : HttpClient,
    private router: Router
  ) { }
  

  onSignin(email:string,password:string){
       const body = {
         email : email,
         password: password,
       }
       return this.httpClient.post(this.url + '/signin', body)
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(sessionStorage['token']){
      //  this.router.navigate(['/'])
      //user is already logged in
    //launch the component
      return true
    }
    
    alert(`pls login`)
    this.router.navigate(['/signin'])
    //user has not logged in yet
    //stop launching the component
    return false
    
  }

}
