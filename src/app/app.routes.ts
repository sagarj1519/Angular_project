// src/app/app-routing.module.ts
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAuthComponent } from './header/login/login.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { CartComponent } from './header/cart/cart.component';
import { SliderComponent } from './slider/slider.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Product1Component } from './product1/product1.component';
import { ProductDetailsComponent } from './product1/product-details/product-details.component';


export const routes: Routes = [
 
  
  // { path: '', redirectTo: 'Loginauth', pathMatch: 'full' },
  { path: 'Loginauth', component: LoginAuthComponent },
  {path: "", component: SliderComponent},
  {path:'navbar' , component: NavbarComponent},
  {path: 'product1', component: Product1Component},
  {path: 'product-details', component: ProductDetailsComponent},
  {path:'cart', component: CartComponent},
  {path:'navbar' , component: NavbarComponent},
  {path: '',
    component:NavbarComponent,
    children: [
      {path: 'product1', 
        component: Product1Component}
      
    ]
  },
  {path: '**', component: PagenotfoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
