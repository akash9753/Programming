import { UploadImageComponent } from './upload-image/upload-image.component';
import { AdminListService } from './admin-list.service';
import { SigninComponent } from './signin/signin.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ProductAddComponent } from './product-add/product-add.component';


const routes: Routes = [
  { path : 'dashboard', component:DashboardComponent, canActivate:[AdminListService] },
  { path : 'user-list', component:UserListComponent, canActivate:[AdminListService] },
  { path : 'product-list', component:ProductListComponent , canActivate:[AdminListService]},
  { path : 'order-list', component:OrderListComponent , canActivate:[AdminListService]},
  { path : 'product-add', component: ProductAddComponent, canActivate:[AdminListService] },
  { path : 'product-upload-image', component: UploadImageComponent, canActivate:[AdminListService] },

  { path : 'signin', component:SigninComponent  },
  
  { path : 'signup', component:SignupComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
