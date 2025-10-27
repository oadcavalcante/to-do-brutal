export type TodoId = string;

export enum TodoStatus {
  PENDING = 'PENDING',
  DONE = 'DONE',
}
export enum TodoPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export interface Todo {
  id: TodoId;
  title: string;
  notes?: string;
  dueDate?: string;
  priority?: TodoPriority;
  status: TodoStatus;
  createdAt: string;
  updatedAt: string;
}
