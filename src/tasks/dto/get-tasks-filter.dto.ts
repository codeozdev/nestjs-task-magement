import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task-status-enum';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsOptional()
  @IsString()
  search: string;
}

// burası getall enpointi içerisinde kullanılacak olan bir dto'dur.
// status ve search parametreleri optional olarak tanımlanmıştır. "?" demek ile aynı anlama gelir
// query parametreleri ile birlikte kullanılır
