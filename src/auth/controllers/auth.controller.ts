import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { UserDTO } from 'src/user/dtos/user.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() data: UserDTO) {
    return this.authService.login(data);
  }
  @Get('login')
  nada(){
    return true
  }
}
