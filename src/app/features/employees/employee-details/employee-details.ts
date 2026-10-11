import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';
import { TranslatePipe } from '../../../shared/translate.pipe';
import { SAMPLE_EMPLOYEES } from '../sample-employees';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    TranslatePipe,
  ],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.scss',
})
export class EmployeeDetailsComponent implements OnInit {
  employee = signal<Employee | null>(null);
  loading = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
  ) {}

  ngOnInit(): void {
    const routeId = this.route.snapshot.paramMap.get('id');

    if (routeId === null) {
      this.employee.set(SAMPLE_EMPLOYEES[0] ?? null);
      if (!this.employee()) {
        this.errorMessage = 'Employee not found.';
      }
      return;
    }

    const id = Number(routeId);
    if (!Number.isInteger(id) || id <= 0) {
      this.errorMessage = 'Invalid employee ID.';
      return;
    }

    this.loadEmployee(id);
  }

  loadEmployee(id: number): void {
    this.loading = true;
    this.errorMessage = '';

    this.employeeService.getEmployee(id).subscribe({
      next: (employee) => {
        this.employee.set(employee ?? this.getFallbackEmployee(id));
        if (!this.employee()) {
          this.errorMessage = 'Employee not found.';
        }
        this.loading = false;
      },

      error: (error) => {
        console.error(error);
        this.employee.set(this.getFallbackEmployee(id));
        if (!this.employee()) {
          this.errorMessage = 'Employee not found.';
        }
        this.loading = false;
      },
    });
  }

  private getFallbackEmployee(id: number): Employee | null {
    return SAMPLE_EMPLOYEES.find((employee) => employee.id === id) ?? null;
  }

  editEmployee(): void {
    const employee = this.employee();
    if (!employee) {
      return;
    }

    this.router.navigate(['/employees', employee.id, 'edit']);
  }

  goBack(): void {
    this.router.navigate(['/employees']);
  }
}
