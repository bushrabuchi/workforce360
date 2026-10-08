import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class SettingsComponent implements OnInit {
  activeSection = signal('profile');
  savedMessage = signal(false);

  // =========================
  // LOGIN / PROFILE DATA
  // =========================

  user = {
    name: 'Bushra',
    email: 'bushra@example.com',
    phone: '+966 5X XXX XXXX',
    jobTitle: 'HR Administrator',
    role: 'Administrator',
    status: 'Active',
    lastLogin: 'Today, 09:42 AM',
  };

  // =========================
  // GENERAL SETTINGS
  // =========================

  language = 'English';
  timezone = 'Asia/Riyadh';
  dateFormat = 'DD MMM YYYY';

  // =========================
  // NOTIFICATIONS
  // =========================

  emailNotifications = true;
  attendanceNotifications = true;
  employeeNotifications = true;
  weeklyReports = false;

  // =========================
  // APPEARANCE
  // =========================

  darkMode = true;

  // =========================
  // SECURITY
  // =========================

  twoFactorEnabled = false;

  ngOnInit(): void {
    this.loadSettings();
  }

  // =========================
  // SECTION
  // =========================

  setSection(section: string): void {
    this.activeSection.set(section);
    this.savedMessage.set(false);
  }

  // =========================
  // SAVE SETTINGS
  // =========================

  saveSettings(): void {
    const settings = {
      user: this.user,
      language: this.language,
      timezone: this.timezone,
      dateFormat: this.dateFormat,
      emailNotifications: this.emailNotifications,
      attendanceNotifications: this.attendanceNotifications,
      employeeNotifications: this.employeeNotifications,
      weeklyReports: this.weeklyReports,
      darkMode: this.darkMode,
      twoFactorEnabled: this.twoFactorEnabled,
    };

    localStorage.setItem('workforce360_settings', JSON.stringify(settings));

    this.applyTheme();

    this.savedMessage.set(true);

    setTimeout(() => {
      this.savedMessage.set(false);
    }, 2500);
  }

  // =========================
  // LOAD SETTINGS
  // =========================

  loadSettings(): void {
    const saved = localStorage.getItem('workforce360_settings');

    if (!saved) {
      this.applyTheme();
      return;
    }

    try {
      const settings = JSON.parse(saved);

      if (settings.user) {
        this.user = {
          ...this.user,
          ...settings.user,
        };
      }

      this.language = settings.language ?? this.language;
      this.timezone = settings.timezone ?? this.timezone;
      this.dateFormat = settings.dateFormat ?? this.dateFormat;

      this.emailNotifications = settings.emailNotifications ?? this.emailNotifications;

      this.attendanceNotifications =
        settings.attendanceNotifications ?? this.attendanceNotifications;

      this.employeeNotifications = settings.employeeNotifications ?? this.employeeNotifications;

      this.weeklyReports = settings.weeklyReports ?? this.weeklyReports;

      this.darkMode = settings.darkMode ?? this.darkMode;

      this.twoFactorEnabled = settings.twoFactorEnabled ?? this.twoFactorEnabled;

      this.applyTheme();
    } catch {
      console.error('Unable to load saved settings');
    }
  }

  // =========================
  // DARK / LIGHT MODE
  // =========================

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;

    this.applyTheme();

    this.saveSettings();
  }

  applyTheme(): void {
    document.body.classList.toggle('dark-theme', this.darkMode);

    localStorage.setItem('workforce360_theme', this.darkMode ? 'dark' : 'light');
  }

  // =========================
  // 2FA
  // =========================

  toggleTwoFactor(): void {
    this.twoFactorEnabled = !this.twoFactorEnabled;

    this.saveSettings();
  }

  // =========================
  // SIGN OUT
  // =========================

  signOut(): void {
    const confirmed = confirm('Are you sure you want to sign out?');

    if (!confirmed) {
      return;
    }

    localStorage.removeItem('workforce360_logged_in');

    alert('You have been signed out.');
  }

  // =========================
  // PASSWORD
  // =========================

  changePassword(): void {
    alert('Password change functionality can be connected to the backend later.');
  }
}
