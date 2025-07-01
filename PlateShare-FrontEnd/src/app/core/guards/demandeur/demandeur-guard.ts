import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from '../../services/auth/AuthService';
import {inject} from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const role = authService.getRole();

  if (role === 'DEMANDEUR') {
    return true;
  } else {
    alert('Access denied: Demandeurs only');
    router.navigate(['/']);
    return false;
  }
};
