import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'secret',
      database: 'task-management-github',
      autoLoadEntities: true, // entity isimindeki dosyalari otomatik olarak yukler
      synchronize: true, // veritabanının semasini otomatik olarak oluşturur
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// main module icinde  forRoot kullanilirken, alt modullerde forFeature kullanilir
