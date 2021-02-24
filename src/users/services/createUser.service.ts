import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../../models';

interface UserDTO {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class CreateUserService {
  /**
   * Create a new user.
   */

  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async execute({ name, email, password }: UserDTO): Promise<User | undefined> {
    const user = this.repository.save({
      name,
      email,
      password,
    });

    return user;
  }
}
