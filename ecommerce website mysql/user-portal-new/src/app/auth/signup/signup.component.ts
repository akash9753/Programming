import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName =""
  lastName = ""
  email = ""
  mobile=""
  password =""
  gender=""
  constructor() {
    
   }
   mobNumberPattern = "^([0-9]{10,12})$";  
   passwordPtn ='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  ngOnInit(): void {
  }
  onSignUp(signUpForm:NgForm){
    console.log(signUpForm)
    this.firstName = signUpForm.value.firstName
    this.lastName = signUpForm.value.lastName
    this.email = signUpForm.value.email
    this.password = signUpForm.value.password
    this.mobile = signUpForm.value.mobile
    this.gender = signUpForm.value.gender
    console.log(this.firstName)
    console.log(this.lastName)
    console.log(this.gender)
    console.log(this.email)
    console.log(this.password)
    console.log(this.mobile)
    
  }
}
