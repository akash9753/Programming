import { UserListService } from './../user-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: null;
  constructor(
    private UserListService: UserListService
  ) { }

  ngOnInit(): void {
    this.loadUsers()
  }
  loadUsers(){
    this.UserListService
    .getUsers()
    .subscribe( (response:any)=>{
      if(response['status'] == 'success'){
        console.log(response['data'])
        console.log(`akash`)
        this.users = response['data']
      }else{
        console.log(response['error'])
      }
    })
  }
  toggelActive(user){
      this.UserListService
      .toggelActiveStatus(user)
      .subscribe(response =>{
        if(response['status'] == 'success'){
          this.loadUsers()
        }else{
          console.log(response['error'])
        }
      })
  }
}
