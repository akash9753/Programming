import { SigninComponent } from './signin/signin.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path : 'dashboard', component:DashboardComponent },
  { path : 'user-list', component:UserListComponent },
  { path : 'product-list', component:ProductListComponent},
  { path : 'order-list', component:OrderListComponent },
  { path : 'signin', component:SigninComponent },
  { path : 'signup', component:SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
