import { Injectable, inject, signal, computed } from '@angular/core';
import { TodosRepository } from '../ports/todos.repository';
import { Todo, TodoId } from '../models/todo.model';
import { toObservable } from '@angular/core/rxjs-interop';

export interface TodoView extends Todo {
  __edit?: boolean;
  __dragging?: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  private repo = inject(TodosRepository);

  private todos = signal<Todo[]>([]);
  readonly todos$ = toObservable(this.todos);

  private filter = signal<'all' | 'pending' | 'done'>('all');
  private search = signal('');
  private sort = signal<'created' | 'priority'>('created');

  readonly view = computed<TodoView[]>(() => {
    let res: TodoView[] = [...this.todos()] as TodoView[];

    const filter = this.filter();
    const search = this.search().trim().toLowerCase();
    const sort = this.sort();

    // filtro done (boolean)
    if (filter !== 'all') {
      res = res.filter((t) => (filter === 'done' ? t.done === true : !t.done));
    }

    if (search) {
      res = res.filter((t) => t.title.toLowerCase().includes(search));
    }

    if (sort === 'priority') {
      res.sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));
    } else {
      res.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    }

    return res;
  });

  readonly view$ = toObservable(this.view);

  constructor() {
    this.refresh();
  }

  refresh() {
    this.repo.list().subscribe((todos) => this.todos.set(todos));
  }

  setFilter(f: 'all' | 'pending' | 'done') {
    this.filter.set(f);
  }

  setSearch(q: string) {
    this.search.set(q);
  }

  setSort(s: 'created' | 'priority') {
    this.sort.set(s);
  }

  add(title: string) {
    this.repo.add({ title }).subscribe(() => this.refresh());
  }

  toggle(id: TodoId, done: boolean) {
    this.repo.update({ id, done }).subscribe(() => this.refresh());
  }

  rename(id: TodoId, title: string) {
    this.repo.update({ id, title }).subscribe(() => this.refresh());
  }

  remove(id: TodoId) {
    this.repo.remove(id).subscribe(() => this.refresh());
  }

  clearCompleted() {
    this.repo.clearCompleted().subscribe(() => this.refresh());
  }

  reorder(ids: TodoId[]) {
    this.repo.reorder(ids).subscribe(() => this.refresh());
  }
}
