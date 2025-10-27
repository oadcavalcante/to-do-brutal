import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodosRepository } from '../core/ports/todos.repository';
import { Todo, TodoId } from '../core/models/todo.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpTodosRepository implements TodosRepository {
  private http = inject(HttpClient);
  private base = `${environment.apiBaseUrl}/todos`;

  list(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.base);
  }
  add(input: Omit<Todo, 'id' | 'createdAt' | 'updatedAt' | 'status'>) {
    return this.http.post<Todo>(this.base, input);
  }
  update(patch: Partial<Todo> & { id: TodoId }) {
    return this.http.patch<Todo>(`${this.base}/${patch.id}`, patch);
  }
  remove(id: TodoId) {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
  clearCompleted() {
    return this.http.post<void>(`${this.base}/clear-completed`, {});
  }
  reorder(ids: TodoId[]) {
    return this.http.post<Todo[]>(`${this.base}/reorder`, { ids });
  }
}
