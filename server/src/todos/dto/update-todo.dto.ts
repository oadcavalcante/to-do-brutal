import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsOptional, IsString, MaxLength, IsISO8601 } from 'class-validator';
import { CreateTodoDto } from './create-todo.dto';
import { TodoPriority, TodoStatus } from '../entities/todo.entity';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsOptional()
  @IsEnum(TodoStatus)
  status?: TodoStatus;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  override title?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  override notes?: string;

  @IsOptional()
  @IsISO8601()
  override dueDate?: string;

  @IsOptional()
  @IsEnum(TodoPriority)
  override priority?: TodoPriority;
}
