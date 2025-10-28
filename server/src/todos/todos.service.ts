import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoEntity, TodoId, TodoStatus } from './entities/todo.entity';

@Injectable()
export class TodosService {
  private todos: TodoEntity[] = this.seed();

  findAll(): TodoEntity[] {
    return this.todos;
  }

  create(input: CreateTodoDto): TodoEntity {
    const title = input.title.trim();
    if (!title) {
      throw new BadRequestException('Title must not be empty');
    }

    const now = new Date().toISOString();
    const todo: TodoEntity = {
      id: uuid(),
      title,
      notes: this.normalizeOptionalText(input.notes),
      dueDate: input.dueDate,
      priority: input.priority,
      status: TodoStatus.PENDING,
      createdAt: now,
      updatedAt: now,
    };

    this.todos = [...this.todos, todo];
    return todo;
  }

  update(id: TodoId, patch: UpdateTodoDto): TodoEntity {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }

    const current = this.todos[index];
    const now = new Date().toISOString();

    const title =
      patch.title !== undefined ? patch.title.trim() : current.title;
    if (patch.title !== undefined && !title) {
      throw new BadRequestException('Title must not be empty');
    }

    const updated: TodoEntity = {
      ...current,
      ...patch,
      title,
      notes:
        patch.notes !== undefined
          ? this.normalizeOptionalText(patch.notes)
          : current.notes,
      updatedAt: now,
    };

    this.todos = [
      ...this.todos.slice(0, index),
      updated,
      ...this.todos.slice(index + 1),
    ];

    return updated;
  }

  remove(id: TodoId): void {
    const exists = this.todos.some((todo) => todo.id === id);
    if (!exists) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  clearCompleted(): void {
    this.todos = this.todos.filter((todo) => todo.status !== TodoStatus.DONE);
  }

  reorder(ids: TodoId[]): TodoEntity[] {
    const seen = new Set<TodoId>();
    const byId = new Map(this.todos.map((todo) => [todo.id, todo] as const));

    const next: TodoEntity[] = [];
    for (const id of ids) {
      if (seen.has(id)) {
        throw new BadRequestException(`Duplicate id "${id}" in reorder payload`);
      }
      seen.add(id);
      const todo = byId.get(id);
      if (!todo) {
        throw new NotFoundException(`Todo with id ${id} not found`);
      }
      next.push(todo);
    }

    for (const todo of this.todos) {
      if (!seen.has(todo.id)) {
        next.push(todo);
      }
    }

    this.todos = next;
    return this.todos;
  }

  private seed(): TodoEntity[] {
    const now = new Date().toISOString();
    return [
      {
        id: uuid(),
        title: 'Explorar o Todo Brutal',
        notes: 'Marque tarefas como concluídas e reorganize com drag-and-drop.',
        status: TodoStatus.PENDING,
        createdAt: now,
        updatedAt: now,
      },
    ];
  }

  private normalizeOptionalText(value: string | undefined): string | undefined {
    if (value === undefined) {
      return undefined;
    }
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : undefined;
  }
}
