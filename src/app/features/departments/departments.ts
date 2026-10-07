import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

interface Department {
  id: number;
  name: string;
  description: string;
  manager: string;
  employeeCount: number;
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './departments.html',
  styleUrl: './departments.scss',
})
export class DepartmentsComponent {
  searchTerm = signal('');
  statusFilter = signal<'All' | 'Active' | 'Inactive'>('All');

  showForm = signal(false);
  editingDepartment = signal<Department | null>(null);

  departmentName = '';
  description = '';
  manager = '';
  status: 'Active' | 'Inactive' = 'Active';

  departments = signal<Department[]>([
    {
      id: 1,
      name: 'Information Technology',
      description: 'Technology, software and infrastructure',
      manager: 'Ahmed Khan',
      employeeCount: 42,
      status: 'Active',
    },
    {
      id: 2,
      name: 'Human Resources',
      description: 'Employee relations and recruitment',
      manager: 'Sarah Ali',
      employeeCount: 18,
      status: 'Active',
    },
    {
      id: 3,
      name: 'Finance',
      description: 'Financial planning and accounting',
      manager: 'Mohammed Hassan',
      employeeCount: 24,
      status: 'Active',
    },
    {
      id: 4,
      name: 'Marketing',
      description: 'Marketing and communications',
      manager: 'Fatima Noor',
      employeeCount: 16,
      status: 'Active',
    },
    {
      id: 5,
      name: 'Operations',
      description: 'Business operations and administration',
      manager: 'Omar Abdullah',
      employeeCount: 31,
      status: 'Inactive',
    },
  ]);

  filteredDepartments = computed(() => {
    const search = this.searchTerm().toLowerCase().trim();
    const status = this.statusFilter();

    return this.departments().filter((department) => {
      const matchesSearch =
        department.name.toLowerCase().includes(search) ||
        department.manager.toLowerCase().includes(search) ||
        department.description.toLowerCase().includes(search);

      const matchesStatus = status === 'All' || department.status === status;

      return matchesSearch && matchesStatus;
    });
  });

  totalDepartments = computed(() => this.departments().length);

  activeDepartments = computed(
    () => this.departments().filter((d) => d.status === 'Active').length,
  );

  totalEmployees = computed(() =>
    this.departments().reduce((total, department) => total + department.employeeCount, 0),
  );

  openAddForm(): void {
    this.editingDepartment.set(null);

    this.departmentName = '';
    this.description = '';
    this.manager = '';
    this.status = 'Active';

    this.showForm.set(true);
  }

  openEditForm(department: Department): void {
    this.editingDepartment.set(department);

    this.departmentName = department.name;
    this.description = department.description;
    this.manager = department.manager;
    this.status = department.status;

    this.showForm.set(true);
  }

  closeForm(): void {
    this.showForm.set(false);
    this.editingDepartment.set(null);
  }

  saveDepartment(): void {
    if (!this.departmentName.trim()) {
      return;
    }

    const editing = this.editingDepartment();

    if (editing) {
      this.departments.update((departments) =>
        departments.map((department) =>
          department.id === editing.id
            ? {
                ...department,
                name: this.departmentName.trim(),
                description: this.description.trim(),
                manager: this.manager.trim(),
                status: this.status,
              }
            : department,
        ),
      );
    } else {
      const newDepartment: Department = {
        id: Date.now(),
        name: this.departmentName.trim(),
        description: this.description.trim(),
        manager: this.manager.trim() || 'Not assigned',
        employeeCount: 0,
        status: this.status,
      };

      this.departments.update((departments) => [...departments, newDepartment]);
    }

    this.closeForm();
  }

  deleteDepartment(department: Department): void {
    const confirmed = confirm(`Are you sure you want to delete ${department.name}?`);

    if (!confirmed) {
      return;
    }

    this.departments.update((departments) => departments.filter((d) => d.id !== department.id));
  }

  clearSearch(): void {
    this.searchTerm.set('');
    this.statusFilter.set('All');
  }
}
