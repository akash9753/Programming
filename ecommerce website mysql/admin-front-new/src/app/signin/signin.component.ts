import { Router } from '@angular/router';
import { AdminListService } from './../admin-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  email = ''
  password = ''
  constructor(
    private AdminListService  : AdminListService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  onSignin(){
      this.AdminListService
      .onSignin(this.email,this.password)
      .subscribe(response =>{
        if(response['status'] == 'success'){
          alert('Welcome bro')
          const data = response['data']
        //cache the user info
        sessionStorage['token'] = data['token']
        sessionStorage['firstName'] = data['firstName']
        sessionStorage['lastName'] = data['lastName']
        this.router.navigate(['/dashboard'])
        }else{
          alert('invalid email or password')
        }
      })
  }

}
