import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard';
import { EmployeesComponent } from './features/employees/employees';
import { EmployeeFormComponent } from './features/employees/employee-form/employee-form';
import { EmployeeDetailsComponent } from './features/employees/employee-details/employee-details';

export const routes: Routes = [
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
    path: '**',
    redirectTo: '',
  },
];
