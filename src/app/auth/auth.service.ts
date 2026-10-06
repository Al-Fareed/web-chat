import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageKey = 'isUserLoggedIn';

  isLoggedIn(): boolean {
    return localStorage.getItem(this.storageKey) === 'true';
  }

  login(): void {
    localStorage.setItem(this.storageKey, 'true');
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
  }
}