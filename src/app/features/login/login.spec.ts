import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { describe, beforeEach, expect, it, vi } from 'vitest';

import { LoginComponent } from './login';
import { AuthService } from '../../core/auth/auth.service';

describe('Login form validation', () => {
  let component: LoginComponent;

  let authMock: {
    login: ReturnType<typeof vi.fn>;
  };

  beforeEach(async () => {
    authMock = {
      login: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [LoginComponent],

      providers: [
        provideRouter([]),

        {
          provide: AuthService,
          useValue: authMock,
        },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(LoginComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('starts with an invalid empty form', () => {
    expect(component.loginForm.valid).toBe(false);

    expect(component.emailControl.hasError('required')).toBe(true);

    expect(component.passwordControl.hasError('required')).toBe(true);
  });

  it('rejects an invalid email address', () => {
    component.loginForm.setValue({
      email: 'bushra',
      password: 'ExamplePassword123!',
    });

    expect(component.emailControl.hasError('email')).toBe(true);

    expect(component.loginForm.valid).toBe(false);
  });

  it('rejects an empty password', () => {
    component.loginForm.setValue({
      email: 'bushra@example.com',
      password: '',
    });

    expect(component.passwordControl.hasError('required')).toBe(true);

    expect(component.loginForm.valid).toBe(false);
  });

  it('accepts a valid email and a non-empty password', () => {
    component.loginForm.setValue({
      email: 'bushra@example.com',
      password: 'ExamplePassword123!',
    });

    expect(component.loginForm.valid).toBe(true);
  });

  it('shows validation state without calling login when the form is empty', () => {
    component.submit();

    expect(component.emailControl.touched).toBe(true);

    expect(component.passwordControl.touched).toBe(true);

    expect(authMock.login).not.toHaveBeenCalled();
  });
});
