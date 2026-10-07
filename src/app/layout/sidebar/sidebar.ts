import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface SidebarMenuItem {
  label: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
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
