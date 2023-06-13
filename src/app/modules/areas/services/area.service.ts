import { Injectable } from '@angular/core';
import { Area } from '@core/models/area';
import { ApiService } from '@core/services';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateAreaRequest } from '../models';
import { UpdateAreaRequest } from '../models/update-area-request';

@Injectable()
export class AreaService {

  private api_url = environment.api_url;

  constructor(private _apiService: ApiService) { }

  public GetAreas(): Observable<Area[]> {
    return this._apiService.Get(`${this.api_url}/area`);
  }

  public GetAreaById(id: string): Observable<Area> {
    return this._apiService.Get(`${this.api_url}/area/${id}`);
  }

  public CreateArea(area: CreateAreaRequest): Observable<string> {
    return this._apiService.Post(`${this.api_url}/area`, area)
  }

  public UpdateArea(area: UpdateAreaRequest): Observable<void> {
    return this._apiService.Put(`${this.api_url}/area/${area.id}`, area);
  }

  public DeleteArea(id: string): Observable<void> {
    return this._apiService.Delete(`${this.api_url}/area/${id}`);
  }
}
