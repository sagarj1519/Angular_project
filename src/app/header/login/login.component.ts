
import { Component,  } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginAuthComponent  {
  loginObj: any ={
    email: 'admin',
    password: '123123'
  }
  constructor(private router:Router){}

  onLogin() {
    if(this.loginObj.email == "admin"  && this.loginObj.password == "123123"){
      this.router.navigateByUrl('/product1')
    }else{
      alert('wrong Credentials');
    }
  }
}
