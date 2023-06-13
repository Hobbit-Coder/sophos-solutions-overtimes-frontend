import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModules } from './material-modules';

// Components
import * as sharedComponents from "./components"

// Directives
import * as sharedDirectives from "./directives";

// Layouts
import * as sharedLayouts from "./layouts";

// Services
import * as sharedServices from "./services";

@NgModule({
  declarations: [
    ...sharedDirectives.directives,
    ...sharedComponents.components,
    ...sharedLayouts.layouts
  ],
  imports: [
    CommonModule,
    RouterModule,

    MaterialModules
  ],
  exports: [
    ...sharedDirectives.directives,
    ...sharedComponents.components,
    ...sharedLayouts.layouts
  ],
  providers: [
    ...sharedServices.services
  ]
})
export class SharedModule { }
