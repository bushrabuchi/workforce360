import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isDarkMode = signal(this.getInitialTheme());

  constructor() {
    this.applyTheme(this.isDarkMode());
  }

  toggleTheme(): void {
    this.applyTheme(!this.isDarkMode());
  }

  setTheme(isDarkMode: boolean): void {
    this.applyTheme(isDarkMode);
  }

  private applyTheme(isDarkMode: boolean): void {
    this.isDarkMode.set(isDarkMode);
    document.body.classList.toggle('dark-theme', isDarkMode);
    localStorage.setItem('workforce360_theme', isDarkMode ? 'dark' : 'light');
  }

  private getInitialTheme(): boolean {
    const savedTheme = localStorage.getItem('workforce360_theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme === 'dark';
    }

    const savedSettings = localStorage.getItem('workforce360_settings');
    if (savedSettings) {
      try {
        const settings: unknown = JSON.parse(savedSettings);
        if (
          typeof settings === 'object' &&
          settings !== null &&
          'darkMode' in settings &&
          typeof settings.darkMode === 'boolean'
        ) {
          return settings.darkMode;
        }
      } catch {
        console.warn('Could not load saved theme preference.');
      }
    }

    return document.body.classList.contains('dark-theme');
  }
}
