import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ProductsComponent } from './products/products.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FiltersComponent } from './filters/filters.component';

const routes: Routes = [
  
  {path:'nav-bar',component:NavBarComponent},
  {path:'filters',component:FiltersComponent},
  {path:'nav-bar/registerPage',component:RegisterPageComponent},
  {path:'nav-bar/signInPage',component:SignInPageComponent},
  {path:'nav-bar/products',component:ProductsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
