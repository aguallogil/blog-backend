import { Module, OnModuleInit } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule implements OnModuleInit {
  constructor(private userService: UserService) { }
  async onModuleInit() {
    await this.userService.ensureAdminUser();
  }

}
