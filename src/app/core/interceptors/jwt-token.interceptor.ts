import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '@core/services';
import { JwtDetails } from '@core/models';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {

  constructor(private _localStorageService: LocalStorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    try {
      let auth_token = this._localStorageService.GetObjectByKey<JwtDetails>("auth_token");

      if (auth_token) {
        let authReq = request.clone({
          headers: request.headers.set('Authorization', `${auth_token.tokenType} ${auth_token.accessToken}`)
        });
        return next.handle(authReq);
      } else {
        return next.handle(request);
      }
    } catch (e) {
      return next.handle(request);
    }
  }
}
