import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';

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
  ],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.scss',
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee | null = null;

  loading = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.errorMessage = 'Invalid employee ID.';
      return;
    }

    this.loadEmployee(id);
  }

  loadEmployee(id: number): void {
    this.loading = true;

    this.employeeService.getEmployee(id).subscribe({
      next: (employee) => {
        this.employee = employee;
        this.loading = false;
      },

      error: (error) => {
        console.error(error);

        this.errorMessage = 'Employee not found.';

        this.loading = false;
      },
    });
  }

  editEmployee(): void {
    if (!this.employee) {
      return;
    }

    this.router.navigate(['/employees', this.employee.id, 'edit']);
  }

  goBack(): void {
    this.router.navigate(['/employees']);
  }
}
