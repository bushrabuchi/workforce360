import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

function applySavedTheme(): void {
  let darkMode = true;
  let hasSavedPreference = false;

  try {
    const savedSettings = localStorage.getItem('workforce360_settings');

    if (savedSettings) {
      const parsedSettings: unknown = JSON.parse(savedSettings);

      if (
        typeof parsedSettings === 'object' &&
        parsedSettings !== null &&
        'darkMode' in parsedSettings &&
        typeof parsedSettings.darkMode === 'boolean'
      ) {
        darkMode = parsedSettings.darkMode;
        hasSavedPreference = true;
      }
    }

    if (!hasSavedPreference) {
      const savedTheme = localStorage.getItem('workforce360_theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        darkMode = savedTheme === 'dark';
        hasSavedPreference = true;
      }
    }
  } catch (error) {
    console.error('Unable to load saved theme preference', error);
  }

  document.body.classList.toggle('dark-theme', darkMode);
}

applySavedTheme();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
