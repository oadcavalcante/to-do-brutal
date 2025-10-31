import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodosRepository } from '../core/ports/todos.repository';
import { Todo, TodoId } from '../core/models/todo.model';

@Injectable({ providedIn: 'root' })
export class LocalStorageTodosRepository implements TodosRepository {
  private readonly STORAGE_KEY = 'todos';

  // 🔹 Utilitários internos
  private load(): Todo[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

  private save(todos: Todo[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
  }

  // 📋 Lista todos os Todos
  list(): Observable<Todo[]> {
    return of(this.load());
  }

  // ➕ Adiciona um novo Todo
  add(input: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>): Observable<Todo> {
    const todos = this.load();
    const now = new Date().toISOString();

    const newTodo: Todo = {
      ...input,
      id: crypto.randomUUID() as TodoId,
      createdAt: now,
      updatedAt: now,
      done: false,
    };

    todos.push(newTodo);
    this.save(todos);
    return of(newTodo);
  }

  // ✏️ Atualiza parcialmente um Todo
  update(patch: Partial<Todo> & { id: TodoId }): Observable<Todo> {
    let updatedTodo!: Todo;
    const todos = this.load().map((t) => {
      if (t.id === patch.id) {
        updatedTodo = {
          ...t,
          ...patch,
          updatedAt: new Date().toISOString(),
        };
        return updatedTodo;
      }
      return t;
    });

    this.save(todos);
    return of(updatedTodo);
  }

  // ❌ Remove um Todo pelo ID
  remove(id: TodoId): Observable<void> {
    const todos = this.load().filter((t) => t.id !== id);
    this.save(todos);
    return of(void 0);
  }

  // 🧹 Remove todos marcados como concluídos (done = true)
  clearCompleted(): Observable<void> {
    const todos = this.load().filter((t) => !t.done);
    this.save(todos);
    return of(void 0);
  }

  // 🔄 Reordena os Todos conforme os IDs recebidos
  reorder(idsInOrder: TodoId[]): Observable<Todo[]> {
    const todos = this.load();
    const reordered = idsInOrder
      .map((id) => todos.find((t) => t.id === id))
      .filter((t): t is Todo => !!t);

    this.save(reordered);
    return of(reordered);
  }
}
