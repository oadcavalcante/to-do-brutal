import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CdkDragDrop,
  CdkDragStart,
  CdkDragEnd,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

import { Todo } from '../../core/models/todo.model';
import { TodoService } from '../../core/services/todo.service';
import { Observable } from 'rxjs';

interface TodoView extends Todo {
  __edit?: boolean;
  __dragging?: boolean;
}

@Component({
  standalone: true,
  selector: 'app-todo-page',
  imports: [CommonModule, FormsModule, DragDropModule],
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  svc = inject(TodoService);

  newTitle = '';
  query = '';
  filter: 'all' | 'pending' | 'done' = 'all';

  sort: 'created' | 'priority' = 'created';
  todos$: Observable<TodoView[]> = this.svc.view$ as Observable<TodoView[]>;
  theme: 'light' | 'dark' =
    (localStorage.getItem('theme') as 'light' | 'dark') || 'light';

  ngOnInit() {
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.theme);
    localStorage.setItem('theme', this.theme);
  }

  add() {
    const t = this.newTitle.trim();
    if (!t) return;
    this.svc.add(t).subscribe(() => (this.newTitle = ''));
  }

  onToggle(id: string, checked: boolean) {
    this.svc.toggle(id, checked).subscribe();
  }

  onRemove(id: string) {
    this.svc.remove(id).subscribe();
  }

  apply() {
    this.svc.setSearch(this.query);
    this.svc.setFilter(this.filter);
    this.svc.setSort(this.sort);
  }

  clearCompleted() {
    this.svc.clearCompleted().subscribe();
  }

  drop(ev: CdkDragDrop<TodoView[]>, list: TodoView[]) {
    moveItemInArray(list, ev.previousIndex, ev.currentIndex);
    this.svc.reorder(list.map((x) => x.id)).subscribe();
  }

  onDragStart(item: TodoView) {
    item.__dragging = true;
  }

  onDragEnd(item: TodoView) {
    item.__dragging = false;
  }

  trackById(_: number, item: TodoView) {
    return item.id;
  }

  toggleEdit(t: TodoView) {
    t.__edit = !t.__edit;
  }

  saveEdit(t: TodoView) {
    t.__edit = false;
    this.svc.rename(t.id, t.title).subscribe();
  }
}
