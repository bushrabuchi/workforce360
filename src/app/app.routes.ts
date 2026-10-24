import { Routes } from '@angular/router';

import { AppLayout } from './layout/app-layout/app-layout';
import { authGuard } from './core/auth/auth.guard';
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'login',
    title: 'Sign in | Workforce360',
    loadComponent: () =>
      import('./features/login/login').then((component) => component.LoginComponent),
  },

  {
    path: '',
    component: AppLayout,
    canActivateChild: [authGuard],
    children: [
      {
        path: 'dashboard',
        pathMatch: 'full',
        title: 'Dashboard | Workforce360',
        loadComponent: () =>
          import('./features/dashboard/dashboard').then(
            (component) => component.DashboardComponent,
          ),
      },

      {
        path: 'employees',
        title: 'Employees | Workforce360',
        loadComponent: () =>
          import('./features/employees/employees').then(
            (component) => component.EmployeesComponent,
          ),
      },

      {
        path: 'employees/add',
        title: 'Add employee | Workforce360',
        loadComponent: () =>
          import('./features/employees/employee-form/employee-form').then(
            (component) => component.EmployeeFormComponent,
          ),
      },

      {
        path: 'employees/:id/edit',
        title: 'Edit employee | Workforce360',
        loadComponent: () =>
          import('./features/employees/employee-form/employee-form').then(
            (component) => component.EmployeeFormComponent,
          ),
      },

      {
        path: 'employees/:id',
        title: 'Employee details | Workforce360',
        loadComponent: () =>
          import('./features/employees/employee-details/employee-details').then(
            (component) => component.EmployeeDetailsComponent,
          ),
      },

      {
        path: 'departments',
        title: 'Departments | Workforce360',
        loadComponent: () =>
          import('./features/departments/departments').then(
            (component) => component.DepartmentsComponent,
          ),
      },

      {
        path: 'attendance',
        title: 'Attendance | Workforce360',
        loadComponent: () =>
          import('./features/attendance/attendance').then(
            (component) => component.AttendanceComponent,
          ),
      },

      {
        path: 'reports',
        title: 'Reports | Workforce360',
        loadComponent: () =>
          import('./features/reports/reports').then((component) => component.ReportsComponent),
      },

      {
        path: 'settings',
        title: 'Settings | Workforce360',
        loadComponent: () =>
          import('./features/settings/settings').then((component) => component.SettingsComponent),
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
