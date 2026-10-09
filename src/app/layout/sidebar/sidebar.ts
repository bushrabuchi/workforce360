import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../shared/translate.pipe';

interface SidebarMenuItem {
  label: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  constructor(readonly languageService: LanguageService) {}

  readonly navItems: SidebarMenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      link: '/',
    },
    {
      label: 'Employees',
      icon: 'groups',
      link: '/employees',
    },
    {
      label: 'Departments',
      icon: 'apartment',
      link: '/departments',
    },
    {
      label: 'Attendance',
      icon: 'event_available',
      link: '/attendance',
    },
    {
      label: 'Reports',
      icon: 'assessment',
      link: '/reports',
    },
    {
      label: 'Settings',
      icon: 'settings',
      link: '/settings',
    },
  ];
}
