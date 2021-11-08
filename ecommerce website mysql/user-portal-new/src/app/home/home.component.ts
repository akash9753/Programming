import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  email = sessionStorage['email']
  constructor(
    private router : Router,
    private toastr : ToastrService,
    ){

  }

  ngOnInit(): void {
  }
  
  onSignOut(){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('firstName')
    sessionStorage.removeItem('lastName')

    this.router.navigate(['/auth/signin'])
    this.toastr.warning(`Signout successfully`)
  }
}
