
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UserDTO } from '../dtos/user.dto';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: UserDTO): Promise<User> {
    const newUser = this.usersRepository.create(createUserDto);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async ensureAdminUser() {
    const adminUsername = 'admin';
    const adminExists = await this.findByUsername(adminUsername);
  
    if (!adminExists) {
      const adminData:UserDTO = {
        username: adminUsername,
        password: '1234', 

      };
      await this.create(adminData);
      console.log('Admin user created');
    }
  }
}

