export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  position: string;
  status: 'Active' | 'On Leave' | 'Inactive';
  joinDate: string;
  avatar: string;
}
