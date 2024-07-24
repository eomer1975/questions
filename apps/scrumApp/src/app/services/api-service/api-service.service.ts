import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private readonly http = inject(HttpClient)
  private readonly baseUrl = inject(API_URL)
  private readonly store = inject(Store)

  public get<T>(url: string, showError = true, customMessageError?: string): Observable<T> {

    return this.http.get<T>(`${this.baseUrl}${url}`).pipe(
      errorPipe(this.store, showError, customMessageError)
    )
  }

  public post<T, D>(url: string, data?: D, showError = true, customMessageError?: string): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${url}`, JSON.stringify(data)).pipe(
      errorPipe(this.store, showError, customMessageError)
    )
  }

  public put<T, D>(url: string, data: D, showError = true, customMessageError?: string): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${url}`, JSON.stringify(data)).pipe(
      errorPipe(this.store, showError, customMessageError)
    )
  }

  public delete<T>(url: string, showError = true, customMessageError?: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}${url}`).pipe(
      errorPipe(this.store, showError, customMessageError)
    )
  }
}
