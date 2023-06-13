import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { accessRoleGuard, authGuard, noAuthGuard } from '@core/guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full'
  },
  {
    path: 'employees',
    loadChildren: () => import('@modules/employees/employees.module').then(module => module.EmployeesModule),
    canActivate: [noAuthGuard, accessRoleGuard],
    data: { permissions: ['GeneralManager', 'AreaManager', 'HumanTalentManager'] }
  },
  {
    path: 'auth',
    loadChildren: () => import('@modules/auth/auth.module').then(module => module.AuthModule),
    canActivate: [authGuard]
  },
  {
    path: 'areas',
    loadChildren: () => import('@modules/areas/areas.module').then(module => module.AreasModule),
    canActivate: [noAuthGuard, accessRoleGuard],
    data: { permissions: ['GeneralManager'] }

  },
  {
    path: 'overtimes',
    loadChildren: () => import('@modules/overtimes/overtimes.module').then(module => module.OvertimesModule),
    canActivate: [noAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
