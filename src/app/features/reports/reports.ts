import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../shared/translate.pipe';

interface EmployeeReport {
  id: number;
  name: string;
  employeeId: string;
  department: string;
  present: number;
  absent: number;
  leave: number;
  attendanceRate: number;
}

interface DepartmentReport {
  name: string;
  employees: number;
  present: number;
  absent: number;
  leave: number;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './reports.html',
  styleUrl: './reports.scss',
})
export class ReportsComponent {
  // =========================
  // FILTERS
  // =========================

  startDate = signal('2026-10-01');
  endDate = signal('2026-10-08');
  selectedDepartment = signal('All Departments');

  // =========================
  // EMPLOYEE REPORT DATA
  // =========================

  employees = signal<EmployeeReport[]>([
    {
      id: 1,
      name: 'Ahmed Hassan',
      employeeId: 'EMP001',
      department: 'Engineering',
      present: 7,
      absent: 0,
      leave: 1,
      attendanceRate: 87.5,
    },
    {
      id: 2,
      name: 'Sarah Khan',
      employeeId: 'EMP002',
      department: 'HR',
      present: 8,
      absent: 0,
      leave: 0,
      attendanceRate: 100,
    },
    {
      id: 3,
      name: 'Mohammed Ali',
      employeeId: 'EMP003',
      department: 'Finance',
      present: 6,
      absent: 1,
      leave: 1,
      attendanceRate: 75,
    },
    {
      id: 4,
      name: 'Fatima Noor',
      employeeId: 'EMP004',
      department: 'Marketing',
      present: 7,
      absent: 1,
      leave: 0,
      attendanceRate: 87.5,
    },
    {
      id: 5,
      name: 'Omar Abdullah',
      employeeId: 'EMP005',
      department: 'Engineering',
      present: 8,
      absent: 0,
      leave: 0,
      attendanceRate: 100,
    },
    {
      id: 6,
      name: 'Aisha Rahman',
      employeeId: 'EMP006',
      department: 'HR',
      present: 6,
      absent: 0,
      leave: 2,
      attendanceRate: 75,
    },
    {
      id: 7,
      name: 'Daniel Thomas',
      employeeId: 'EMP007',
      department: 'Sales',
      present: 7,
      absent: 1,
      leave: 0,
      attendanceRate: 87.5,
    },
    {
      id: 8,
      name: 'Hassan Ahmed',
      employeeId: 'EMP008',
      department: 'Finance',
      present: 8,
      absent: 0,
      leave: 0,
      attendanceRate: 100,
    },
  ]);

  // =========================
  // DEPARTMENT DATA
  // =========================

  departments = signal<DepartmentReport[]>([
    {
      name: 'Engineering',
      employees: 42,
      present: 38,
      absent: 2,
      leave: 2,
    },
    {
      name: 'HR',
      employees: 24,
      present: 21,
      absent: 1,
      leave: 2,
    },
    {
      name: 'Finance',
      employees: 31,
      present: 27,
      absent: 2,
      leave: 2,
    },
    {
      name: 'Marketing',
      employees: 28,
      present: 25,
      absent: 2,
      leave: 1,
    },
    {
      name: 'Sales',
      employees: 35,
      present: 31,
      absent: 3,
      leave: 1,
    },
  ]);

  // =========================
  // DEPARTMENT LIST
  // =========================

  departmentNames = computed(() => [
    'All Departments',
    ...this.departments().map((department) => department.name),
  ]);

  // =========================
  // FILTERED EMPLOYEES
  // =========================

  filteredEmployees = computed(() => {
    const department = this.selectedDepartment();

    if (department === 'All Departments') {
      return this.employees();
    }

    return this.employees().filter((employee) => employee.department === department);
  });

  // =========================
  // SUMMARY STATISTICS
  // =========================

  totalEmployees = computed(() => {
    if (this.selectedDepartment() === 'All Departments') {
      return 248;
    }

    const department = this.departments().find((item) => item.name === this.selectedDepartment());

    return department?.employees ?? 0;
  });

  totalPresent = computed(() => {
    if (this.selectedDepartment() === 'All Departments') {
      return this.departments().reduce((total, department) => total + department.present, 0);
    }

    const department = this.departments().find((item) => item.name === this.selectedDepartment());

    return department?.present ?? 0;
  });

  totalAbsent = computed(() => {
    if (this.selectedDepartment() === 'All Departments') {
      return this.departments().reduce((total, department) => total + department.absent, 0);
    }

    const department = this.departments().find((item) => item.name === this.selectedDepartment());

    return department?.absent ?? 0;
  });

  totalLeave = computed(() => {
    if (this.selectedDepartment() === 'All Departments') {
      return this.departments().reduce((total, department) => total + department.leave, 0);
    }

    const department = this.departments().find((item) => item.name === this.selectedDepartment());

    return department?.leave ?? 0;
  });

  // =========================
  // ATTENDANCE RATE
  // =========================

  attendanceRate = computed(() => {
    const present = this.totalPresent();
    const absent = this.totalAbsent();
    const leave = this.totalLeave();

    const total = present + absent + leave;

    if (!total) {
      return 0;
    }

    return Math.round((present / total) * 100);
  });

  // =========================
  // DEPARTMENT BAR WIDTH
  // =========================

  getDepartmentPercentage(employees: number): number {
    const max = Math.max(...this.departments().map((department) => department.employees));

    return Math.round((employees / max) * 100);
  }

  // =========================
  // ATTENDANCE BAR WIDTH
  // =========================

  getAttendancePercentage(value: number): number {
    const total = this.totalPresent() + this.totalAbsent() + this.totalLeave();

    if (!total) {
      return 0;
    }

    return Math.round((value / total) * 100);
  }

  // =========================
  // FILTER
  // =========================

  applyFilters(): void {
    console.log('Report filters:', {
      startDate: this.startDate(),
      endDate: this.endDate(),
      department: this.selectedDepartment(),
    });
  }

  // =========================
  // CSV EXPORT
  // =========================

  exportCSV(): void {
    const rows = this.filteredEmployees();

    const headers = [
      'Employee ID',
      'Employee Name',
      'Department',
      'Present',
      'Absent',
      'Leave',
      'Attendance Rate',
    ];

    const csvRows = rows.map((employee) => [
      employee.employeeId,
      employee.name,
      employee.department,
      employee.present,
      employee.absent,
      employee.leave,
      `${employee.attendanceRate}%`,
    ]);

    const csvContent = [headers.join(','), ...csvRows.map((row) => row.join(','))].join('\n');

    const blob = new Blob([csvContent], {
      type: 'text/csv;charset=utf-8;',
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');

    link.href = url;
    link.download = 'workforce360-report.csv';

    link.click();

    window.URL.revokeObjectURL(url);
  }

  // =========================
  // PRINT
  // =========================

  printReport(): void {
    window.print();
  }
}
