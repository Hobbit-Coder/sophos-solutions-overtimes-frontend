import { Injectable } from '@angular/core';
import { JwtDetails } from '@core/models';
import { ApiService, LocalStorageService } from '@core/services';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationRequest, CreateUserReponse, CreateUserRequest } from '@modules/auth/models';


@Injectable()
export class AuthService {

  private url: string;

  constructor(private _apiService: ApiService, private _localStorageService: LocalStorageService) {
    this.url = environment.api_url;
  }

  public SignIn(user: AuthenticationRequest): Observable<JwtDetails> {
    return this._apiService.Post<AuthenticationRequest, JwtDetails>(`${this.url}/auth/sign-in`, user)
      .pipe(map(jwt => {
        this._localStorageService.SetObject('auth_token', jwt);
        return jwt;
      }));
  }

  public SignUp(user: CreateUserRequest): Observable<CreateUserReponse> {
    return this._apiService.Post<CreateUserRequest, CreateUserReponse>(`${this.url}/auth/sign-up`, user);
  }

  public SignOut() {
    this._localStorageService.ClearAll();
  }

  public GetMe(): Observable<any> {
    return this._apiService.Get(`${this.url}/user/me`);
  }
}
