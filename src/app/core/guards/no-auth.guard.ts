import { inject } from '@angular/core';
import { CanActivateFn, Router, } from '@angular/router';
import { LocalStorageService } from '@core/services';


export const noAuthGuard: CanActivateFn = (route, state) => {

  const _localStorageService: LocalStorageService = inject(LocalStorageService);
  const _router: Router = inject(Router);

  let auth_token = _localStorageService.GetItemByKey('auth_token');

  if (!auth_token) {
    _router.navigate(['/auth/sign-in']);
    return false;
  }

  return true;
};
