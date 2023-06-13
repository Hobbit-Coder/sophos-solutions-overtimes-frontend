import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MaterialModules } from './material-modules';

// Components
import * as authComponents from "./components";

// Pages
import * as authPages from "./pages"

// Services
import * as authServices from "./services";

@NgModule({
  declarations: [
    ...authPages.pages,
    ...authComponents.components
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModules
  ],
  providers: [
    ...authServices.services
  ]
})
export class AuthModule { }
