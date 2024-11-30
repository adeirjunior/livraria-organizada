import { Controller, Get } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.users();
  }
}
