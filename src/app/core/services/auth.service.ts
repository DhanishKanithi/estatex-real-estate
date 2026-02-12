import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {

    // Replace later with real backend call
    if (email === 'admin@gmail.com' && password === '1234') {
      const user = {
        token: 'fake-jwt-token',
        role: 'admin'
      };
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }

    if (email === 'user@gmail.com' && password === '1234') {
      const user = {
        token: 'fake-jwt-token',
        role: 'user'
      };
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).token : null;
  }

  getRole(): string | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).role : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
