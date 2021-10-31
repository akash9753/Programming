import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './editprofile/editprofile.component'


const routes : Routes = [
  { path: 'product-list', component:ProductListComponent },
  { path: 'product-add', component:ProductAddComponent },
  { path: 'home', component:HomeComponent },
  { path: 'profile', component:ProfileComponent },
  { path: 'editProfile', component:EditprofileComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent,
    HomeComponent,
    ProfileComponent,
    EditprofileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
