import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isSignDivVisiable: boolean = true;

  signUpObj: SignUpModel = new SignUpModel();
  loginObj: LoginModel = new LoginModel();

  constructor(private router: Router) {}

  onRegister() {
    debugger;
    const localUser = localStorage.getItem('angular17users');
    if (localUser != null) {
      const users = JSON.parse(localUser);
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users));
    } else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('angular17users', JSON.stringify(users));
    }
    alert('Registration Success');
  }

  onLogin() {
    debugger;
    const localUsers = localStorage.getItem('angular17users');
    if (localUsers != null) {
      const users = JSON.parse(localUsers);

      const isUserPresent = users.find(
        (user: SignUpModel) =>
          user.email == this.loginObj.email &&
          user.password == this.loginObj.password
      );
      if (isUserPresent != undefined) {
        alert('User Found...');
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('/dashboard');
      } else {
        alert('No User Found');
      }
    }
  }
}

export class SignUpModel {
  name: string;
  surname: string;
  email: string;
  password: string;
  age: number | null;
  weight: number | null;
  height: number | null;

  constructor() {
    this.email = '';
    this.name = '';
    this.surname = '';
    this.password = '';
    this.age = null;
    this.weight = null;
    this.height = null;
  }
}

export class LoginModel {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}
