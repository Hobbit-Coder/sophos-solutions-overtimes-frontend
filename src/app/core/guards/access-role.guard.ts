import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RoleService } from '@core/services';

export const accessRoleGuard: CanActivateFn = (route, state) => {
  let router: Router = inject(Router);
  let roleService: RoleService = inject(RoleService);

  let { permissions } = route.data;
  let userRole = roleService.GetUserRole();

  if (userRole) {
    let access = permissions.includes(userRole);
    if (!access) {
      router.navigate(['/overtimes']);
      return false;
    }
  }

  return true;
};
