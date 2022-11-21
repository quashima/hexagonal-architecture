import { Module } from '@nestjs/common';
import { AppController } from './adapters/primary/app.controller';
import { AppService } from './domain/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
