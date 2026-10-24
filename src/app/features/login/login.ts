import { Component, DestroyRef, inject, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  readonly hidePassword = signal(true);
  readonly isLoading = signal(false);
  readonly notice = signal('');
  readonly errorMessage = signal('');

  readonly loginForm = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor() {
    const reason = this.route.snapshot.queryParamMap.get('reason');

    if (reason === 'expired') {
      this.notice.set('Your session has expired. Please sign in again.');
    }

    if (reason === 'unavailable') {
      this.notice.set('We could not verify your session. Check that the backend is running.');
    }
  }

  get emailControl() {
    return this.loginForm.controls.email;
  }

  get passwordControl() {
    return this.loginForm.controls.password;
  }

  togglePasswordVisibility(): void {
    this.hidePassword.update((hidden) => !hidden);
  }

  submit(): void {
    if (this.isLoading()) {
      return;
    }

    this.notice.set('');
    this.errorMessage.set('');

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const credentials = this.loginForm.getRawValue();

    this.isLoading.set(true);

    this.auth
      .login({
        email: credentials.email.trim().toLowerCase(),
        password: credentials.password,
      })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe({
        next: () => {
          this.passwordControl.reset();

          void this.router.navigateByUrl(this.getReturnUrl(), {
            replaceUrl: true,
          });
        },

        error: (error: unknown) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.errorMessage.set('Invalid email or password.');
              return;
            }

            if (error.status === 0) {
              this.errorMessage.set('Cannot reach the server. Check your connection and backend.');
              return;
            }

            if (error.status === 422) {
              this.errorMessage.set('Please check your email and password fields.');
              return;
            }
          }

          this.errorMessage.set('Unable to sign in right now. Please try again.');
        },
      });
  }

  private getReturnUrl(): string {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

    // Only allow known application routes as return destinations.
    const allowedRoute =
      /^\/(dashboard|employees|departments|attendance|reports|settings)(\/|\?|#|$)/;

    return returnUrl && allowedRoute.test(returnUrl) ? returnUrl : '/dashboard';
  }
}
