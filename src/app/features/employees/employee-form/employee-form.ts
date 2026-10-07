import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.scss',
})
export class EmployeeFormComponent implements OnInit {
  isEditMode = false;
  employeeId: number | null = null;

  loading = false;
  errorMessage = '';
  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
  ) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      department: ['', Validators.required],
      position: ['', Validators.required],
      status: ['Active', Validators.required],
      joinDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEditMode = true;
      this.employeeId = Number(id);

      this.loadEmployee(this.employeeId);
    }
  }

  loadEmployee(id: number): void {
    this.loading = true;

    this.employeeService.getEmployee(id).subscribe({
      next: (employee) => {
        const nameParts = employee.name.split(' ');

        this.employeeForm.patchValue({
          firstName: nameParts[0] || '',
          lastName: nameParts.slice(1).join(' ') || '',
          email: employee.email,
          department: employee.department,
          position: employee.position,
          status: employee.status,
          joinDate: employee.joinDate,
        });

        this.loading = false;
      },

      error: (error) => {
        console.error(error);

        this.errorMessage = 'Unable to load employee.';

        this.loading = false;
      },
    });
  }

  saveEmployee(): void {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();

      return;
    }

    const formValue = this.employeeForm.getRawValue();

    const employeeData = {
      name: `${formValue.firstName} ${formValue.lastName}`.trim(),
      email: formValue.email!,
      department: formValue.department!,
      position: formValue.position!,
      status: formValue.status as 'Active' | 'On Leave' | 'Inactive',
      joinDate: formValue.joinDate!,
      avatar: '',
    };

    this.loading = true;
    this.errorMessage = '';

    if (this.isEditMode && this.employeeId) {
      this.employeeService.updateEmployee(this.employeeId, employeeData).subscribe({
        next: () => {
          this.router.navigate(['/employees']);
        },

        error: (error) => {
          console.error(error);

          this.errorMessage = 'Unable to update employee.';

          this.loading = false;
        },
      });
    } else {
      this.employeeService.createEmployee(employeeData).subscribe({
        next: () => {
          this.router.navigate(['/employees']);
        },

        error: (error) => {
          console.error(error);

          this.errorMessage = 'Unable to create employee.';

          this.loading = false;
        },
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/employees']);
  }
}
