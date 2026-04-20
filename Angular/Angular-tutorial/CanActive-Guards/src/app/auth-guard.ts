import { CanActivateFn,Route, Router  } from '@angular/router';
import { Auth } from './auth';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);
  
  if (auth.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }

};
