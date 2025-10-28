import { IsEnum, IsISO8601, IsOptional, IsString, MaxLength } from 'class-validator';
import { TodoPriority } from '../entities/todo.entity';

export class CreateTodoDto {
  @IsString()
  @MaxLength(200)
  title!: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  notes?: string;

  @IsOptional()
  @IsISO8601()
  dueDate?: string;

  @IsOptional()
  @IsEnum(TodoPriority)
  priority?: TodoPriority;
}
