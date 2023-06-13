import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '@core/services';


export const authGuard: CanActivateFn = (route, state) => {

  const _localStorageService:LocalStorageService = inject(LocalStorageService);
  const _router:Router = inject(Router);

  let auth_token = _localStorageService.GetItemByKey('auth_token');

    if (auth_token) {
      _router.navigate(['/']);
      return false;
    }

    return true;
};
