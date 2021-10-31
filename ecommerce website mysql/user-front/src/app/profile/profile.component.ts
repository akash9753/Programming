import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   
  firstName : "akash"
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
  editProfile(){
    
  }
}
