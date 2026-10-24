import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';

import { App } from './app';
import { routes } from './app.routes';

describe('App routing', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes), provideLocationMocks()],
    }).compileComponents();
  });

  it('shows login without the application layout, including query parameters', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    fixture.detectChanges();

    await router.navigateByUrl('/login?returnUrl=%2Femployees');
    await fixture.whenStable();

    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('app-login')).not.toBeNull();
    expect(element.querySelector('app-layout')).toBeNull();
    expect(element.querySelector('app-header')).toBeNull();
    expect(element.querySelector('app-sidebar')).toBeNull();
  });

  it('shows the dashboard inside the application layout', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    fixture.detectChanges();

    await router.navigateByUrl('/');
    await fixture.whenStable();

    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('app-layout')).not.toBeNull();
    expect(element.querySelector('app-header')).not.toBeNull();
    expect(element.querySelector('app-sidebar')).not.toBeNull();
    expect(element.querySelector('app-dashboard')).not.toBeNull();
    expect(element.querySelector('app-login')).toBeNull();
  });
});
