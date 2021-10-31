import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
   
  firstName : string
  lastName : string
  email : string
  mobile : string
  password : string
  lang : string
  gender :string
  dateOfBirth :string
  age : 0
  address :string
  city :string
  zip :0
  state :string
  country :string
  
  constructor() { }

  ngOnInit(): void {
  }

  onSave(){
     console.log(`firstname:  ${this.firstName}`)
   console.log(`lastname:  ${this.lastName}`)
   console.log(`email:  ${this.email}`) 
   console.log(`password:  ${this.password}`)
   console.log(`mobile:  ${this.mobile}`)
   console.log(`lang:  ${this.lang}`)   
   console.log(`gender:  ${this.gender}`)   
   console.log(`dateOfBirth:  ${this.dateOfBirth}`)   
   console.log(`age:  ${this.age}`)  
   console.log(`address:  ${this.address}`)  
   console.log(`city:  ${this.city}`)  
   console.log(`zip:  ${this.zip}`)  
   console.log(`state:  ${this.state}`)
   console.log(`country:  ${this.country}`)
  }
  onCancel(){

  }
}
