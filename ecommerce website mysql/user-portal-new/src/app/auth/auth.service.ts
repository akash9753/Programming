import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{
   url = 'http://localhost:4000/user'
  constructor(
    private router: Router,
    private httpClient : HttpClient,
    private toastr : ToastrService,
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
      console.log(sessionStorage['token'])
      //  this.router.navigate(['/'])
      //user is already logged in
    //launch the component
      return true
    }
    
    this.toastr.error('Signin Please ....')
    this.router.navigate(['/auth/signin'])
    //user has not logged in yet
    //stop launching the component
    return false
    
  }
}

