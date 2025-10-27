import { inject, Injectable } from '@angular/core';
import { TodosRepository } from '../core/ports/todos.repository';
import { Todo, TodoId, TodoStatus } from '../core/models/todo.model';
import { BehaviorSubject, map, of } from 'rxjs';
import { v4 as uuid } from 'uuid';

const KEY = 'todos.v1';

@Injectable({ providedIn: 'root' })
export class LocalStorageTodosRepository implements TodosRepository {
  private store = new BehaviorSubject<Todo[]>(this.read());

  list() {
    return this.store.asObservable();
  }

  add(input: Omit<Todo, 'id' | 'createdAt' | 'updatedAt' | 'status'>) {
    const now = new Date().toISOString();
    const todo: Todo = {
      id: uuid(),
      title: input.title,
      notes: input.notes,
      dueDate: input.dueDate,
      priority: input.priority,
      status: TodoStatus.PENDING,
      createdAt: now,
      updatedAt: now,
    };
    const next = [...this.store.value, todo];
    this.write(next);
    return of(todo);
  }

  update(patch: Partial<Todo> & { id: TodoId }) {
    const next = this.store.value.map((t) =>
      t.id === patch.id
        ? { ...t, ...patch, updatedAt: new Date().toISOString() }
        : t
    );
    this.write(next);
    const updated = next.find((t) => t.id === patch.id)!;
    return of(updated);
  }

  remove(id: TodoId) {
    const next = this.store.value.filter((t) => t.id !== id);
    this.write(next);
    return of(void 0);
  }

  clearCompleted() {
    const next = this.store.value.filter((t) => t.status !== TodoStatus.DONE);
    this.write(next);
    return of(void 0);
  }

  reorder(ids: TodoId[]) {
    const mapById = new Map(this.store.value.map((t) => [t.id, t]));
    const next = ids.map((id) => mapById.get(id)!).filter(Boolean);
    this.write(next);
    return of(next);
  }

  /* helpers */
  private read(): Todo[] {
    try {
      return JSON.parse(localStorage.getItem(KEY) ?? '[]');
    } catch {
      return [];
    }
  }
  private write(todos: Todo[]) {
    localStorage.setItem(KEY, JSON.stringify(todos));
    this.store.next(todos);
  }
}
