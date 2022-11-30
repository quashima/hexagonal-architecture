import { Module } from '@nestjs/common';
import { UserController } from './adapters/primary/user.controller';
import { UserService } from './application/domain/user.service';
import { PrismaAdapter } from './adapters/secondary/prisma.adapter';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, PrismaAdapter],
})
export class AppModule {}
