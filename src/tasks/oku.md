

Evet, NestJS'de neden interface yerine class kullanmamız gerektiğini açıklayayım:

1. **TypeScript Interface vs Class**:
```typescript
// Interface - RUNTIME'da YOK OLUR
interface TaskInterface {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

// Class - RUNTIME'da VARDIR
class TaskClass {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
```

Temel sebepler:

1. **Runtime Davranışı**:
- Interface'ler sadece derleme zamanında vardır, runtime'da silinir
- Class'lar runtime'da da mevcuttur
- NestJS dependency injection ve decorator'lar için runtime bilgisine ihtiyaç duyar

2. **Decorator Kullanımı**:
```typescript:src/tasks/task.entity.ts
// Class ile çalışır
@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}

// Interface ile ÇALIŞMAZ
@Entity()
export interface Task {
  id: string;
}
```

3. **DTO Örneği**:
```typescript:src/tasks/dto/create-task.dto.ts
// Doğru kullanım - Class
export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}

// Yanlış kullanım - Interface
export interface CreateTaskDto {
  title: string;
  description: string;
}
```

Özet:
- NestJS'de class kullanın
- Interface'ler runtime'da olmadığı için decorator'lar çalışmaz
- Validation, transformation ve serialization gibi özellikler class'larla çalışır
- Dependency injection sistemi class'lara ihtiyaç duyar
- TypeScript'in type checking özelliğinden yararlanmak istiyorsanız, internal tiplerde interface kullanabilirsiniz
