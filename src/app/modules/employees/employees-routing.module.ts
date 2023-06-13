import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import * as employeesPages from "./pages";

const routes: Routes = [
  {
    path: '',
    component: employeesPages.EmployeesPageComponent
  },
  {
    path: ':id',
    component: employeesPages.EditEmployeePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
