import { Controller, Get } from '@nestjs/common';
import { UserService } from '../../domain/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('all')
  async getAll() {
    return this.service.all();
  }
}
