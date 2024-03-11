import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/user/dtos/user.dto';
import { UserService } from 'src/user/services/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByUsername(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException(); // Lanza una excepción aquí si la validación falla
  }

  async login(data: UserDTO) {
    const user = await this.validateUser(data.username, data.password); // Si falla, se lanzará UnauthorizedException
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
