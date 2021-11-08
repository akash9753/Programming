import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
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
  editProfile(){
    
  }
}
