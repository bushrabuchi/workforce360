import { inject } from '@angular/core';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

import { API_BASE_URL } from '../api.config';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  // Never send our token to unrelated services.
  if (!request.url.startsWith(`${API_BASE_URL}/`)) {
    return next(request);
  }

  const auth = inject(AuthService);
  const router = inject(Router);

  const isLoginRequest = request.url === `${API_BASE_URL}/auth/login`;

  const isCurrentUserRequest = request.url === `${API_BASE_URL}/auth/me`;

  const token = auth.getAccessToken();

  const authenticatedRequest =
    token && !isLoginRequest
      ? request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        })
      : request;

  return next(authenticatedRequest).pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse && error.status === 401 && !isLoginRequest) {
        auth.clearSession();

        // For /me, the guard or login component handles the result.
        if (!isCurrentUserRequest) {
          void router.navigate(['/login'], {
            queryParams: {
              reason: 'expired',
            },
            replaceUrl: true,
          });
        }
      }

      return throwError(() => error);
    }),
  );
};
