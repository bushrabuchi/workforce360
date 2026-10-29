import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { TranslatePipe } from '../../shared/translate.pipe';
import { AuthService } from '../../core/auth/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BidiModule } from '@angular/cdk/bidi';
interface AppNotification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

@Component({
  imports: [
    CommonModule,
    RouterLink,
    TranslatePipe,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    BidiModule,
  ],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  private readonly auth = inject(AuthService);
  isArabic: LanguageService['isArabic'];
  notifications = signal<AppNotification[]>([
    {
      id: 1,
      title: 'New employee',
      message: 'A new employee has been added.',
      time: '10 minutes ago',
      read: false,
    },
    {
      id: 2,
      title: 'Attendance update',
      message: 'Attendance records are ready to review.',
      time: '30 minutes ago',
      read: false,
    },
    {
      id: 3,
      title: 'Weekly report',
      message: 'Your weekly report is available.',
      time: 'Yesterday',
      read: true,
    },
  ]);
  constructor(
    private languageService: LanguageService,
    private themeService: ThemeService,
    private router: Router,
  ) {
    this.isArabic = languageService.isArabic;
  }
  get user() {
    const account = this.auth.user();

    return {
      name: account?.name ?? '',
      email: account?.email ?? '',
      role: 'Signed-in user',
    };
  }
  isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }

  toggleDarkMode(): void {
    this.themeService.toggleTheme();
  }

  unreadCount(): number {
    return this.notifications().filter((item) => !item.read).length;
  }

  markAsRead(id: number): void {
    this.notifications.update((items) =>
      items.map((item) => (item.id === id ? { ...item, read: true } : item)),
    );

    localStorage.setItem('workforce360_notifications', JSON.stringify(this.notifications()));
  }

  markAllAsRead(): void {
    this.notifications.update((items) => items.map((item) => ({ ...item, read: true })));

    localStorage.setItem('workforce360_notifications', JSON.stringify(this.notifications()));
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }
  signOut(): void {
    if (!window.confirm('Are you sure you want to sign out?')) {
      return;
    }

    this.auth.clearSession();

    void this.router.navigate(['/login'], {
      replaceUrl: true,
    });
  }
}
