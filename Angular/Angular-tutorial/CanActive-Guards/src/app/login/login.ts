import { Component,inject } from '@angular/core';
import { Auth } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  auth = inject(Auth);
  router = inject(Router);

  login() {
    this.auth.login();
    this.router.navigate(['/dashboard']);
  }
}
