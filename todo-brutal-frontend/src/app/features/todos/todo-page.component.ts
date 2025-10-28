import { Component, OnInit, inject, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { toSignal } from '@angular/core/rxjs-interop';

import { Todo } from '../../core/models/todo.model';
import { TodoService } from '../../core/services/todo.service';

export interface TodoView extends Todo {
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
  private svc = inject(TodoService);

  newTitle = '';
  query = '';
  filter: 'all' | 'pending' | 'done' = 'all';
  sort: 'created' | 'priority' = 'created';

  // ✅ Mantém o signal reativo com valor inicial
  todos: WritableSignal<TodoView[]> = toSignal(this.svc.view$, {
    initialValue: [] as TodoView[],
  }) as WritableSignal<TodoView[]>;

  theme: 'light' | 'dark' =
    (localStorage.getItem('theme') as 'light' | 'dark') || 'light';

  ngOnInit() {
    // ✅ Atualiza o atributo do HTML na inicialização
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.theme);
    localStorage.setItem('theme', this.theme);
  }

  // ✅ Adiciona nova tarefa
  add() {
    const t = this.newTitle.trim();
    if (!t) return;
    this.svc.add(t);
    this.newTitle = '';
  }

  // ✅ Marca como concluída ou pendente
  onToggle(id: string, checked: boolean) {
    this.svc.toggle(id, checked);
  }

  // ✅ Remove tarefa
  onRemove(id: string) {
    this.svc.remove(id);
  }

  // ✅ Aplica filtros, busca e ordenação
  apply() {
    this.svc.setSearch(this.query);
    this.svc.setFilter(this.filter);
    this.svc.setSort(this.sort);
  }

  // ✅ Limpa concluídas
  clearCompleted() {
    this.svc.clearCompleted();
  }

  // ✅ Reordena lista
  drop(ev: CdkDragDrop<TodoView[]>) {
    const list = [...this.todos()]; // copia para evitar mutação direta
    moveItemInArray(list, ev.previousIndex, ev.currentIndex);
    this.svc.reorder(list.map((x) => x.id));
  }

  // ✅ Define feedback visual de drag
  onDragStart(item: TodoView) {
    item.__dragging = true;
  }

  onDragEnd(item: TodoView) {
    item.__dragging = false;
  }

  trackById(_: number, item: TodoView) {
    return item.id;
  }

  // ✅ Edição inline
  toggleEdit(t: TodoView) {
    t.__edit = !t.__edit;
  }

  saveEdit(t: TodoView) {
    t.__edit = false;
    this.svc.rename(t.id, t.title);
  }
}
