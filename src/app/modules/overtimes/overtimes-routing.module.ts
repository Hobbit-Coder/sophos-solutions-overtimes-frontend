import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import * as overtimesPages from "./pages";

const routes: Routes = [
  {
    path: '',
    component: overtimesPages.OvertimesPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OvertimesRoutingModule { }
