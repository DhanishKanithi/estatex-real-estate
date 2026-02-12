import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
  styleUrls: ['./auth.scss']
})
export class Auth {

  isLogin = true;

  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  toggleMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit() {

    if (!this.email || !this.password) {
      alert('Please enter email and password');
      return;
    }

    if (this.isLogin) {

      const success = this.authService.login(this.email, this.password);

      if (success) {
        const returnUrl =
        this.route.snapshot.queryParamMap.get('returnUrl') || '/';

      this.router.navigateByUrl(returnUrl);
      } else {
        alert('Invalid Credentials ❌');
      }

    } else {
      // Signup simulation
      alert('Signup successful (Demo Mode)');
      this.isLogin = true;
    }
  }
}
