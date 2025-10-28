import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ReorderTodosDto } from './dto/reorder-todos.dto';
import { TodoEntity } from './entities/todo.entity';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  list(): TodoEntity[] {
    return this.todosService.findAll();
  }

  @Post()
  create(@Body() dto: CreateTodoDto): TodoEntity {
    return this.todosService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() dto: UpdateTodoDto,
  ): TodoEntity {
    return this.todosService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string): void {
    this.todosService.remove(id);
  }

  @Post('clear-completed')
  @HttpCode(204)
  clearCompleted(): void {
    this.todosService.clearCompleted();
  }

  @Post('reorder')
  reorder(@Body() dto: ReorderTodosDto): TodoEntity[] {
    return this.todosService.reorder(dto.ids);
  }
}
