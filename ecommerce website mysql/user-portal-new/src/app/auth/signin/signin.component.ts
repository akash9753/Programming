import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email =''
  password = ''
  firstName = ''
  lastName = ''
  constructor(
    private toastr : ToastrService,
    private authService: AuthService,
    private router: Router,
    
    
  ) { }

  ngOnInit(): void {
  }
  
  onSignin(){
    if(this.email.length == 0){
       this.toastr.error('please enter email')
    }else if(!this.email.match("[a-z0-9._%+-]+@([a-z0-9.-]{5})+\.[a-z]{2,4}$")){
      this.toastr.error('please enter valid email')
       }else if(this.password.length == 0){
       this.toastr.error('please enter password')
    }else{
      this.authService
    .onSignin(this.email,this.password)
    .subscribe((response :any) =>{
      if(response ['status'] == 'success'){
        
        const data = response['data']
        console.log(data)
      //cache the user info
      sessionStorage['token'] = data['token']
      sessionStorage['firstName'] = data['firstName']
      sessionStorage['lastName'] = data['lastName']
      sessionStorage['email'] = data['email']
      this.toastr.success(`Welcome ${data['firstName']} to Top 10 Jabalpur`)
      this.router.navigate(['/home'])
      }else{
        this.toastr.error(response ['error'])
      }
    })
    }
    
}


}

