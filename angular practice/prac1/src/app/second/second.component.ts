import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  firstName : string
  lastName : string
  email : string
  mobile : string
  password : string
  lang : string
  gender :string
  dateOfBirth :string
  age : number
  address :string
  city :string
  zip :number
  state :string
  country :string
  
  constructor() { }

  ngOnInit(): void {
  }
  onSave(){
    this.firstName = "akash"
    this.lastName = "patel"
    this.email = "akash9753@gmail.com"
    this.mobile = "9753290759"
    this.password = "123456"
    this.lang = "javascript"
    this.gender = "M"
    this.dateOfBirth = "2000/01/11"
    this.age = 21
    this.address = "104/ mahakoushal"
    this.city = "Jabalpur"
    this.zip = 482004
    this.state = "madhya pradesh"
    this.country = "India"
  }
  change(){
    this.firstName = "akash"
    this.lastName = "patel"
    this.email = "akash9753@gmail.com"
    this.mobile = "9753290759"
    this.password = "123456"
    this.lang = "javascript"
    this.gender = "M"
    this.dateOfBirth = "2000/01/11"
    this.age = 21
    this.address = "104/ mahakoushal"
    this.city = "Jabalpur"
    this.zip = 482004
    this.state = "madhya pradesh"
    this.country = "India"
  }
  
}
