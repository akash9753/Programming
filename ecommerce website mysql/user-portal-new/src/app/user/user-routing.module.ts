import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressAddComponent } from './address-add/address-add.component';
import { AddressListComponent } from './address-list/address-list.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'address-add',component:AddressAddComponent},
  {path:'address-list',component:AddressListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
