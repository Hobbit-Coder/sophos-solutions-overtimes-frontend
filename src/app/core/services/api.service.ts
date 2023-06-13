import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProblemDetails } from "@core/models";

@Injectable()
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error)
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => error.error as ProblemDetails)
  }

  public Get<TResponse>(urlPath: string, params: HttpParams = new HttpParams()): Observable<TResponse> {
    return this.httpClient.get<TResponse>(urlPath, { params })
      .pipe(catchError(this.handleError));
  }

  public Post<TBody, TResponse>(urlPath: string, body: TBody): Observable<TResponse> {
    return this.httpClient.post<TResponse>(urlPath, body)
      .pipe(catchError(this.handleError));
  }

  public Put<TBody, TResponse>(urlPath: string, body: TBody): Observable<TResponse> {
    return this.httpClient.put<TResponse>(urlPath, body)
      .pipe(catchError(this.handleError));
  }

  public Delete<TResponse>(urlPath: string): Observable<TResponse> {
    return this.httpClient.delete<TResponse>(urlPath)
      .pipe(catchError(this.handleError));
  }
}
