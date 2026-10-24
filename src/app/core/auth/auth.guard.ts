import { inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { CanActivateChildFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';

import { AuthService } from './auth.service';

export const authGuard: CanActivateChildFn = (_route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const loginRedirect = (reason?: string) =>
    router.createUrlTree(['/login'], {
      queryParams: {
        returnUrl: state.url,
        ...(reason ? { reason } : {}),
      },
    });

  return auth.restoreSession().pipe(
    map((user) => {
      return user ? true : loginRedirect();
    }),

    catchError((error: unknown) => {
      const reason =
        error instanceof HttpErrorResponse && error.status === 401 ? 'expired' : 'unavailable';

      return of(loginRedirect(reason));
    }),
  );
};
