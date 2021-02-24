import { Controller, Post, Body } from '@nestjs/common';

import { CreateUserService } from './services/createUser.service';

@Controller('users')
export class UserController {
  constructor(private createUserService: CreateUserService) {} // Injectable service

  @Post()
  async create() {
    // Do stuff...
  }
}
