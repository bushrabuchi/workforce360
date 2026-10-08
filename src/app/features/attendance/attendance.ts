import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
interface AttendanceRecord {
  id: number;
  employeeName: string;
  employeeId: string;
  department: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: 'Present' | 'Absent' | 'Leave';
}

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './attendance.html',
  styleUrl: './attendance.scss',
})
export class AttendanceComponent {
  searchTerm = signal('');
  statusFilter = signal<'All' | 'Present' | 'Absent' | 'Leave'>('All');
  dateFilter = signal('');

  showForm = signal(false);
  editingRecord = signal<AttendanceRecord | null>(null);

  employeeName = '';
  employeeId = '';
  department = '';
  date = '';
  checkIn = '';
  checkOut = '';
  status: 'Present' | 'Absent' | 'Leave' = 'Present';
  attendanceRecords = signal<AttendanceRecord[]>([
    {
      id: 1,
      employeeName: 'Ahmed Khan',
      employeeId: 'EMP001',
      department: 'Information Technology',
      date: '2026-10-07',
      checkIn: '08:32',
      checkOut: '17:15',
      status: 'Present',
    },
    {
      id: 2,
      employeeName: 'Sarah Ali',
      employeeId: 'EMP002',
      department: 'Human Resources',
      date: '2026-10-07',
      checkIn: '08:45',
      checkOut: '17:00',
      status: 'Present',
    },
    {
      id: 3,
      employeeName: 'Mohammed Hassan',
      employeeId: 'EMP003',
      department: 'Finance',
      date: '2026-10-07',
      checkIn: '-',
      checkOut: '-',
      status: 'Absent',
    },
    {
      id: 4,
      employeeName: 'Fatima Noor',
      employeeId: 'EMP004',
      department: 'Marketing',
      date: '2026-10-07',
      checkIn: '-',
      checkOut: '-',
      status: 'Leave',
    },
    {
      id: 5,
      employeeName: 'Omar Abdullah',
      employeeId: 'EMP005',
      department: 'Operations',
      date: '2026-10-07',
      checkIn: '08:20',
      checkOut: '17:10',
      status: 'Present',
    },
  ]);
  filteredRecords = computed(() => {
    const search = this.searchTerm().toLowerCase().trim();
    const status = this.statusFilter();
    const date = this.dateFilter();

    return this.attendanceRecords().filter((record) => {
      const matchesSearch =
        record.employeeName.toLowerCase().includes(search) ||
        record.employeeId.toLowerCase().includes(search) ||
        record.department.toLowerCase().includes(search);

      const matchesStatus = status === 'All' || record.status === status;

      const matchesDate = !date || record.date === date;

      return matchesSearch && matchesStatus && matchesDate;
    });
  });

  totalRecords = computed(() => this.filteredRecords().length);

  presentToday = computed(
    () => this.filteredRecords().filter((r) => r.status === 'Present').length,
  );

  absentToday = computed(() => this.filteredRecords().filter((r) => r.status === 'Absent').length);

  leaveCount = computed(() => this.filteredRecords().filter((r) => r.status === 'Leave').length);

  openAddForm(): void {
    this.editingRecord.set(null);

    this.employeeName = '';
    this.employeeId = '';
    this.department = '';
    this.date = '2026-10-07';
    this.checkIn = '';
    this.checkOut = '';
    this.status = 'Present';

    this.showForm.set(true);
  }

  openEditForm(record: AttendanceRecord): void {
    this.editingRecord.set(record);

    this.employeeName = record.employeeName;
    this.employeeId = record.employeeId;
    this.department = record.department;
    this.date = record.date;
    this.checkIn = record.checkIn === '-' ? '' : record.checkIn;
    this.checkOut = record.checkOut === '-' ? '' : record.checkOut;
    this.status = record.status;

    this.showForm.set(true);
  }

  closeForm(): void {
    this.showForm.set(false);
    this.editingRecord.set(null);
  }

  saveAttendance(): void {
    if (!this.employeeName.trim() || !this.employeeId.trim() || !this.date) {
      return;
    }

    const editing = this.editingRecord();

    const finalCheckIn = this.status === 'Present' ? this.checkIn || '-' : '-';

    const finalCheckOut = this.status === 'Present' ? this.checkOut || '-' : '-';

    if (editing) {
      this.attendanceRecords.update((records) =>
        records.map((record) =>
          record.id === editing.id
            ? {
                ...record,
                employeeName: this.employeeName.trim(),
                employeeId: this.employeeId.trim(),
                department: this.department.trim(),
                date: this.date,
                checkIn: finalCheckIn,
                checkOut: finalCheckOut,
                status: this.status,
              }
            : record,
        ),
      );
    } else {
      const newRecord: AttendanceRecord = {
        id: Date.now(),
        employeeName: this.employeeName.trim(),
        employeeId: this.employeeId.trim(),
        department: this.department.trim() || 'Not assigned',
        date: this.date,
        checkIn: finalCheckIn,
        checkOut: finalCheckOut,
        status: this.status,
      };

      this.attendanceRecords.update((records) => [...records, newRecord]);
    }

    this.closeForm();
  }

  deleteAttendance(record: AttendanceRecord): void {
    const confirmed = confirm(`Delete attendance record for ${record.employeeName}?`);

    if (!confirmed) {
      return;
    }

    this.attendanceRecords.update((records) => records.filter((r) => r.id !== record.id));
  }

  clearFilters(): void {
    this.searchTerm.set('');
    this.statusFilter.set('All');
    this.dateFilter.set('');
  }
}
