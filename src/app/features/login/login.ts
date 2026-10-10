import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  notice = signal('');

  submit(): void {
    this.notice.set('Authentication is not connected yet. Your credentials were not submitted.');
  }
}
