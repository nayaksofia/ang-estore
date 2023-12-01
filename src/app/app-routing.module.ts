import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AccountComponent } from './account/account.component';
import { ServiceComponent } from './service/service.component';

//Create a jshon object which have path
const routes: Routes = [
 {path:' ', redirectTo:'/home',pathMatch:'full'},
 {path:'home', component:HomeComponent},
 {path:'account',component:AccountComponent},
 {path:'service', component:ServiceComponent},
 {path:'products', component:ProductsComponent},
 {path:'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
