import { Observable } from 'rxjs';
import { Todo, TodoId } from '../models/todo.model';

export abstract class TodosRepository {
  abstract list(): Observable<Todo[]>;
  abstract add(
    input: Omit<Todo, 'id' | 'createdAt' | 'updatedAt' | 'status'>
  ): Observable<Todo>;
  abstract update(todo: Partial<Todo> & { id: TodoId }): Observable<Todo>;
  abstract remove(id: TodoId): Observable<void>;
  abstract clearCompleted(): Observable<void>;
  abstract reorder(idsInOrder: TodoId[]): Observable<Todo[]>;
}
