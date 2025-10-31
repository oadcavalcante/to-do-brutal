import { IsNotEmpty, IsOptional, IsBoolean, IsInt } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsBoolean()
  done?: boolean;

  @IsOptional()
  @IsInt()
  priority?: number;
}
