import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OvertimesRoutingModule } from './overtimes-routing.module';
import { MaterialModules } from '@shared/material-modules';
import { SharedModule } from '@shared/shared.module';

// Components
import * as overtimesComponents from "./components";

// Pages
import * as overtimesPages from "./pages";

// Services
import * as overtimesServices from "./services";

@NgModule({
  declarations: [
    ...overtimesComponents.components,
    ...overtimesPages.pages
  ],
  imports: [
    CommonModule,
    OvertimesRoutingModule,
    MaterialModules,
    SharedModule
  ],
  providers: [
    ...overtimesServices.services
  ]
})
export class OvertimesModule { }
