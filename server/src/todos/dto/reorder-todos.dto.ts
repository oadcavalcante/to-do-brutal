import { ArrayNotEmpty, IsArray, IsString } from 'class-validator';

export class ReorderTodosDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  ids!: string[];
}
