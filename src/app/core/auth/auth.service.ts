import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, switchMap, tap, throwError } from 'rxjs';

import { API_BASE_URL } from '../api.config';
import { AuthUser, LoginRequest, TokenResponse } from './auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly tokenKey = 'workforce360_access_token';

  private readonly userState = signal<AuthUser | null>(null);

  readonly user = this.userState.asReadonly();

  readonly isAuthenticated = computed(() => this.userState() !== null);

  getAccessToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  login(credentials: LoginRequest): Observable<AuthUser> {
    this.clearSession();

    return this.http.post<TokenResponse>(`${API_BASE_URL}/auth/login`, credentials).pipe(
      tap((response) => {
        sessionStorage.setItem(this.tokenKey, response.access_token);
      }),

      switchMap(() => this.fetchCurrentUser()),

      catchError((error) => {
        this.clearSession();
        return throwError(() => error);
      }),
    );
  }

  restoreSession(): Observable<AuthUser | null> {
    if (!this.getAccessToken()) {
      this.clearSession();
      return of(null);
    }

    // Ask the backend to verify the stored token.
    return this.fetchCurrentUser();
  }

  clearSession(): void {
    sessionStorage.removeItem(this.tokenKey);
    this.userState.set(null);
  }

  private fetchCurrentUser(): Observable<AuthUser> {
    return this.http
      .get<AuthUser>(`${API_BASE_URL}/auth/me`)
      .pipe(tap((user) => this.userState.set(user)));
  }
}
