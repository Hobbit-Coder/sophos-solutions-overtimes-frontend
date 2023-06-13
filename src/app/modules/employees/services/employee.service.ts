import { Injectable } from '@angular/core';
import { User } from '@core/models/user';
import { ApiService } from '@core/services';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetUserResponse } from '../models/get-user-response';
import { HttpParams } from '@angular/common/http';
import { UpdateUserRequest } from '../models/update-user-request';

@Injectable()
export class EmployeeService {

  private api_url: string;

  constructor(private _apiService: ApiService) {
    this.api_url = environment.api_url;
  }

  public GetEmployees(): Observable<GetUserResponse[]> {
    return this._apiService.Get(`${this.api_url}/employee`, new HttpParams().set('areaId', ''));
  }

  public GetEmployeeById(id: string): Observable<GetUserResponse> {
    return this._apiService.Get(`${this.api_url}/employee/${id}`)
  }

  public UpdateEmployee(employee: UpdateUserRequest): Observable<void> {
    return this._apiService.Put(`${this.api_url}/employee/${employee.id}`, employee);
  }
}
