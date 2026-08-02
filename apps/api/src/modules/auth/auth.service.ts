import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    return this.usersService.create(dto);
  }

  async login(dto: LoginDto) {
    // TODO: verify credentials against stored (hashed) password
    const payload = { email: dto.email };
    return { accessToken: this.jwtService.sign(payload) };
  }

  async validateUser(_email: string, _password: string) {
    throw new UnauthorizedException();
  }
}
