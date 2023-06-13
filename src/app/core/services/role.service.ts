import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { JwtDetails } from '@core/models';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Role } from '@core/models/role';
import { environment } from 'src/environments/environment';

@Injectable()
export class RoleService {

  private api_url: string;

  constructor(private _localStorageService: LocalStorageService, private _apiService: ApiService) {
    this.api_url = environment.api_url;
  }

  public GetUserRole(): string | null {
    let auth_token = this._localStorageService.GetObjectByKey<JwtDetails>('auth_token');
    if (auth_token) {
      let claims = JSON.parse(atob(auth_token.accessToken.split('.')[1]));
      return claims['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    }
    return null;
  }

  public GetRoles(): Observable<Role[]> {
    return this._apiService.Get(`${this.api_url}/role`);
  }
}
