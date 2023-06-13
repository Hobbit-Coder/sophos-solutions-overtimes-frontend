import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasRoutingModule } from './areas-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MaterialModules } from './material-modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import * as areasComponents from "./components";

// Pages
import * as areasPages from "./pages";

// Services
import * as areasServices from "./services";

@NgModule({
  declarations: [
    ...areasComponents.components,
    ...areasPages.pages,
  ],
  imports: [
    CommonModule,
    AreasRoutingModule,
    SharedModule,
    MaterialModules,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ...areasServices.services
  ]
})
export class AreasModule { }
