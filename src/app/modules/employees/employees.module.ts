import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModules } from './material-modules';
import { EmployeesRoutingModule } from './employees-routing.module';
import { AreasModule } from '@modules/areas/areas.module';

// Components
import * as employeesComponents from "./components";

// Pages
import * as employeesPages from "./pages";

// Services
import * as employeesServices from "./services";

@NgModule({
  declarations: [
    ...employeesComponents.components,
    ...employeesPages.pages,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,

    FormsModule,
    ReactiveFormsModule,

    MaterialModules,

    AreasModule
  ],
  providers: [
    ...employeesServices.services
  ]
})
export class EmployeesModule { }
