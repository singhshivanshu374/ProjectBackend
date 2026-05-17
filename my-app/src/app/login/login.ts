import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <h2>Login</h2>
    <button (click)="login()">Login</button>
  `
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}
  login() {
    if (this.auth.user) this.router.navigate(['/profile']);
    else alert('No user found!');
  }
}