import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../shared/translate.pipe';
interface AppNotification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

@Component({
  imports: [CommonModule, TranslatePipe],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header implements OnInit {
  isArabic: LanguageService['isArabic'];
  notificationsOpen = signal(false);
  profileOpen = signal(false);

  user = {
    name: 'Bushra',
    email: 'bushra@example.com',
    role: 'Administrator',
  };
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
  constructor(private languageService: LanguageService) {
    this.isArabic = languageService.isArabic;
  }

  ngOnInit(): void {
    const savedUser = localStorage.getItem('workforce360_user');
    if (savedUser) {
      try {
        this.user = { ...this.user, ...JSON.parse(savedUser) };
      } catch {
        console.warn('Could not load saved user profile.');
      }
    }
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }
  signOut(): void {
  }
}
