import { Component, DestroyRef, inject, signal } from '@angular/core';
import { Sidebar } from './layout/sidebar/sidebar';
import { Header } from './layout/header/header';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar, Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly router = inject(Router);
  readonly isLoginPage = signal(this.router.url === '/login');

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(inject(DestroyRef)),
      )
      .subscribe((event) => this.isLoginPage.set(event.urlAfterRedirects === '/login'));
  }
}
