import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard';
import { EmployeesComponent } from './features/employees/employees';
import { EmployeeFormComponent } from './features/employees/employee-form/employee-form';
import { EmployeeDetailsComponent } from './features/employees/employee-details/employee-details';
import { DepartmentsComponent } from './features/departments/departments';
import { AttendanceComponent } from './features/attendance/attendance';
import { SettingsComponent } from './features/settings/settings';
import { ReportsComponent } from './features/reports/reports';
import { LoginComponent } from './features/login/login';
export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: DashboardComponent,
  },

  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'employees/add',
    component: EmployeeFormComponent,
  },
  {
    path: 'employees/:id/edit',
    component: EmployeeFormComponent,
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailsComponent,
  },
  {
    path: 'departments',
    component: DepartmentsComponent,
  },
  {
    path: 'attendance',
    component: AttendanceComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'reports',
    component: ReportsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
