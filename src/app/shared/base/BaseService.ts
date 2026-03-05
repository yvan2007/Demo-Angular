import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(private http: HttpClient) {}

  private buildUrl(url: string): string {
    if (/^https?:\/\//i.test(url)) {
      return url;
    }

    return `${environment.apiBaseUrl}${url}`;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const message = error.error?.message || error.message || 'Erreur inattendue.';
    return throwError(() => new Error(message));
  }

  save<TPayload, TResponse>(url: string, data: TPayload): Observable<TResponse> {
    return this.http.post<TResponse>(this.buildUrl(url), data).pipe(
      retry(environment.apiRetryCount),
      catchError((error) => this.handleError(error))
    );
  }

  get<TResponse>(url: string): Observable<TResponse> {
    return this.http.get<TResponse>(this.buildUrl(url)).pipe(
      retry(environment.apiRetryCount),
      catchError((error) => this.handleError(error))
    );
  }

  put<TPayload, TResponse>(url: string, data: TPayload): Observable<TResponse> {
    return this.http.put<TResponse>(this.buildUrl(url), data).pipe(
      retry(environment.apiRetryCount),
      catchError((error) => this.handleError(error))
    );
  }

  delete<TResponse>(url: string): Observable<TResponse> {
    return this.http.delete<TResponse>(this.buildUrl(url)).pipe(
      retry(environment.apiRetryCount),
      catchError((error) => this.handleError(error))
    );
  }
}