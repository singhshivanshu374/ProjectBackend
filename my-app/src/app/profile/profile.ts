import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Profile</h2>
    <p *ngIf="auth.user">Logged in as: {{ auth.user.name }}</p>
  `
})
export class ProfileComponent {
  constructor(public auth: AuthService) {}
}