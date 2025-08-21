import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../services/auth/AuthService';

export const authGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {

    // getrole
    const role = authService.getRole();

    if (role === 'DONATEUR') {
      router.navigate(['/donateur/dashboard']);
    } else if (role === 'DEMANDEUR') {
      router.navigate(['/demandeur/dashboard']);
    } else if (role === 'ADMIN') {
      router.navigate(['/admin/dashboard']);
    } else {
      router.navigate(['/']);
    }
// no access to login & register page
    return false;
  }

// get access
return true;
};

