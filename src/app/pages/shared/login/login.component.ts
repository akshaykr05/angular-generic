import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSignUp(): void {
    console.log('Signup button clicked');
  }

  onLogin(): void {
    console.log('Login button clicked');
  }
}
