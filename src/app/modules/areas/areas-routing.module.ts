import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import * as areasPages from "./pages";

const routes: Routes = [
  {
    path: '',
    component: areasPages.AreasPageComponent
  },
  {
    path: 'edit/:id',
    component: areasPages.AddAreaPageComponent
  },
  {
    path: 'add',
    component: areasPages.AddAreaPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreasRoutingModule { }
