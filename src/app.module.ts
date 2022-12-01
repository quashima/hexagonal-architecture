import { Module } from '@nestjs/common';
import { UserController } from './primary/adapters/user.controller';
import { UserService } from './application/user.service';
import { PrismaAdapter } from './secondary/adapters/prisma.adapter';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, PrismaAdapter],
})
export class AppModule {}
