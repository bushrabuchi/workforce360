import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { afterEach, vi } from 'vitest';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  beforeEach(async () => {
    localStorage.removeItem('workforce360_language');

    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('opens the profile menu with account settings and sign-out actions', () => {
    fixture.detectChanges();
    fixture.nativeElement.querySelector('.profile-trigger').click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.profile-dropdown')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.profile-dropdown').textContent).toContain(
      'Account settings',
    );
    expect(fixture.nativeElement.querySelector('.logout-action').textContent).toContain(
      'Sign Out',
    );
  });

  it('navigates to the login page after confirming sign-out', () => {
    const router = TestBed.inject(Router);
    const navigate = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    vi.spyOn(window, 'confirm').mockReturnValue(true);

    component.signOut();

    expect(localStorage.getItem('workforce360_logged_in')).toBeNull();
    expect(navigate).toHaveBeenCalledWith(['/login']);
  });

  it('switches between Arabic and English and updates document direction', () => {
    fixture.detectChanges();
    component.toggleLanguage();
    fixture.detectChanges();

    expect(component.isArabic()).toBe(true);
    expect(localStorage.getItem('workforce360_language')).toBe('ar');
    expect(document.documentElement.lang).toBe('ar');
    expect(document.documentElement.dir).toBe('rtl');
    expect(fixture.nativeElement.querySelector('.language-label').textContent.trim()).toBe(
      'English',
    );
    expect(fixture.nativeElement.querySelector('input').placeholder).toBe(
      'البحث عن الموظفين...',
    );

    component.toggleLanguage();
    fixture.detectChanges();

    expect(component.isArabic()).toBe(false);
    expect(localStorage.getItem('workforce360_language')).toBe('en');
    expect(document.documentElement.lang).toBe('en');
    expect(document.documentElement.dir).toBe('ltr');
    expect(fixture.nativeElement.querySelector('.language-label').textContent.trim()).toBe(
      'العربية',
    );
    expect(fixture.nativeElement.querySelector('input').placeholder).toBe('Search employees...');
  });
});
