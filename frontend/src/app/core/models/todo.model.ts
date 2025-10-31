export type TodoId = string;

export interface Todo {
  id: TodoId;
  title: string;
  done?: boolean;
  priority?: number;
  createdAt: string;
  updatedAt?: string;
}
