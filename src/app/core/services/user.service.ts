import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { JwtDetails } from '@core/models';

@Injectable()
export class UserService {

  constructor(private _localStorageService: LocalStorageService) { }

  public GetUserRole(): string | null {
    let auth_token = this._localStorageService.GetObjectByKey<JwtDetails>('auth_token');
    if (auth_token) {
      let claims = JSON.parse(atob(auth_token.accessToken.split('.')[1]));
      return claims['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    }
    return null;
  }

  public GetUserArea(): string | null {
    let auth_token = this._localStorageService.GetObjectByKey<JwtDetails>('auth_token');
    if (auth_token) {
      let claims = JSON.parse(atob(auth_token.accessToken.split('.')[1]));
      return claims['http://schemas.microsoft.com/ws/2008/06/identity/claims/sid']
    }
    return null;
  }
}
