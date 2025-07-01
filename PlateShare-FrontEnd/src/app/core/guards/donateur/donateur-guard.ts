import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../services/auth/AuthService';

export const donateurGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const role = authService.getRole();

  if (role === 'DONATEUR') {
    return true;
  } else {
    alert('Access denied: Donateur only');
    router.navigate(['/']);
    return false;
  }
};
