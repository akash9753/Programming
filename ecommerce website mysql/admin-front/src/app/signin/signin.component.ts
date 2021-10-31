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
    private AdminListService  : AdminListService
  ) { }

  ngOnInit(): void {
  }
  onSignin(){
      this.AdminListService
      .onSignin(this.email,this.password)
      .subscribe(response =>{
        if(response['status'] == 'success'){
          const data = response['data']
        //cache the user info
        sessionStorage['token'] = data['token']
        sessionStorage['firstName'] = data['firstName']
        sessionStorage['lastName'] = data['lastName']
        }else{
          alert('invalid email or password')
        }
      })
  }

}
