import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { LoginAuthComponent } from './header/login/login.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { SectionComponent } from './section/section.component';
import { SliderComponent } from './slider/slider.component';
import { Slider1Component } from './slider1/slider1.component';
import { Slider2Component } from './slider2/slider2.component';
import { Section1Component } from './section1/section1.component';
import { FooterComponent } from './footer/footer.component';
import { Product1Component } from './product1/product1.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product1/product-details/product-details.component';
import { CartComponent } from "./header/cart/cart.component";
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginAuthComponent, NavbarComponent, SectionComponent, SliderComponent, Slider1Component, Slider2Component, Section1Component, FooterComponent, Product1Component,
    FormsModule, HttpClientModule, ProductDetailsComponent, CartComponent,HomeComponent],


  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSignupMode = false;

  toggleMode() {
    this.isSignupMode = !this.isSignupMode;
  }

  onLogin() {
    // Implement login logic here
    console.log('Logging in...');
  }

  onSignup() {
    // Implement signup logic here
    console.log('Signing up...');
  }
}
