import { Module } from '@nestjs/common';
import { AppController } from './adapters/primary/app.controller';
import { UserController } from './adapters/primary/user.controller';
import { AppService } from './domain/app.service';
import { UserService } from './domain/user.service';
import { PrismaAdapter } from './adapters/secondary/prisma.adapter';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, PrismaAdapter],
})
export class AppModule {}
