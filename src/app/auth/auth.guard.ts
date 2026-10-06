import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuard: CanActivateFn = (route) => {

    const authService = inject(AuthService);
    const router = inject(Router);
    const requiresAuth = route.data['requiresAuth'] ?? true;
    const isLoggedIn = authService.isLoggedIn();

    if (requiresAuth) {
        if (isLoggedIn) {
            return true;
        }
        router.navigate(['/login']);
        return false;
    } else {
        if (!isLoggedIn) {
            return true;
        }
        router.navigate(['/feed']);
        return false;
    }
}