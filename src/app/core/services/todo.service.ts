import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { TodosRepository } from '../ports/todos.repository';
import { Todo, TodoId, TodoStatus, TodoPriority } from '../models/todo.model';

export type Filter = 'all' | 'pending' | 'done';
export type SortMode = 'created' | 'priority';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private repo = inject(TodosRepository) as TodosRepository;

  readonly todos$: Observable<Todo[]> = this.repo.list();

  private filter$ = new BehaviorSubject<Filter>('all');
  private search$ = new BehaviorSubject<string>('');
  private sort$ = new BehaviorSubject<SortMode>('created');

  readonly view$ = combineLatest<[Todo[], Filter, string, SortMode]>([
    this.todos$,
    this.filter$,
    this.search$,
    this.sort$,
  ]).pipe(
    map(([todos, filter, search, sort]) => {
      let res = todos.slice();

      if (filter !== 'all') {
        res = res.filter((t) =>
          filter === 'done'
            ? t.status === TodoStatus.DONE
            : t.status === TodoStatus.PENDING
        );
      }
      if (search.trim()) {
        const s = search.toLowerCase();
        res = res.filter(
          (t) =>
            t.title.toLowerCase().includes(s) ||
            (t.notes ?? '').toLowerCase().includes(s)
        );
      }
      if (sort === 'priority') {
        const rank = { HIGH: 0, MEDIUM: 1, LOW: 2 } as const;
        res.sort(
          (a, b) => rank[a.priority ?? 'LOW'] - rank[b.priority ?? 'LOW']
        );
      } else {
        res.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
      }
      return res;
    })
  );

  setFilter(f: Filter) {
    this.filter$.next(f);
  }
  setSearch(q: string) {
    this.search$.next(q);
  }
  setSort(s: SortMode) {
    this.sort$.next(s);
  }

  add(title: string) {
    return this.repo.add({ title });
  }
  toggle(id: TodoId, done: boolean) {
    return this.repo.update({
      id,
      status: done ? TodoStatus.DONE : TodoStatus.PENDING,
    });
  }
  rename(id: TodoId, title: string) {
    return this.repo.update({ id, title });
  }
  remove(id: TodoId) {
    return this.repo.remove(id);
  }
  clearCompleted() {
    return this.repo.clearCompleted();
  }
  reorder(ids: TodoId[]) {
    return this.repo.reorder(ids);
  }
}
