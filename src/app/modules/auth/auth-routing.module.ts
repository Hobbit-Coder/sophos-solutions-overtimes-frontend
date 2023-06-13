import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import * as authPages from "./pages";

const routes: Routes = [
  {
    path: 'sign-in',
    component: authPages.SignInComponent
  },
  {
    path: 'sign-up',
    component: authPages.SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
