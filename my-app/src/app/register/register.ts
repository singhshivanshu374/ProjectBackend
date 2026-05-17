import { Component } from '@angular/core';
import { AuthService } from '../auth';

@Component({
  selector: 'app-register',
  standalone: true,
  template: `
    <h2>Register</h2>
    <input #u placeholder="Username">
    <button (click)="reg(u.value)">Register</button>
  `
})
export class RegisterComponent {
  constructor(private auth: AuthService) {}
  reg(val: string) { this.auth.user = { name: val }; alert('Registered!'); }
}