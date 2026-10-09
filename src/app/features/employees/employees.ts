import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { TranslatePipe } from '../../shared/translate.pipe';
@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    TranslatePipe,
  ],
  templateUrl: './employees.html',
  styleUrl: './employees.scss',
})
export class EmployeesComponent implements OnInit {
  employees = signal<Employee[]>([]);

  loading = false;
  errorMessage = '';

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.loading = true;
    this.errorMessage = '';

    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees.set(data);
        this.loading = false;
      },

      error: (error) => {
        console.error(error);

        this.errorMessage = 'Unable to load employees. Please try again.';

        this.loading = false;
      },
    });
  }

  addEmployee(): void {
    this.router.navigate(['/employees/add']);
  }

  viewEmployee(id: number): void {
    this.router.navigate(['/employees', id]);
  }

  editEmployee(id: number): void {
    this.router.navigate(['/employees', id, 'edit']);
  }

  deleteEmployee(id: number): void {
    const confirmed = confirm('Are you sure you want to delete this employee?');

    if (!confirmed) {
      return;
    }

    this.employeeService.deleteEmployee(id).subscribe({
      next: () => {
        this.loadEmployees();
      },

      error: (error) => {
        console.error(error);

        this.errorMessage = 'Unable to delete employee.';
      },
    });
  }

  searchText = '';
  selectedDepartment = 'All';
  selectedStatus = 'All';

  displayedColumns = ['employee', 'department', 'position', 'status', 'joinDate', 'actions'];

  get filteredEmployees(): Employee[] {
    return this.employees().filter((employee) => {
      const matchesSearchText = employee.name.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesDepartment =
        this.selectedDepartment === 'All' || employee.department === this.selectedDepartment;
      const matchesStatus =
        this.selectedStatus === 'All' || employee.status === this.selectedStatus;
      return matchesSearchText && matchesDepartment && matchesStatus;
    });
  }
}
