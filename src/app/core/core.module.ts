import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Interceptors
import * as coreInterceptors from "./interceptors";

// Services
import * as coreServices from "./services";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ...coreServices.services,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: coreInterceptors.JwtTokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
