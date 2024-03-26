import { AuthService } from './auth.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  loginView() {
    return 'login success';
  }

  @Post()
  login(@Body() a: string) {
    return this.authService.login(a);
  }

  @Post()
  register(@Body() re: string) {
    return this.authService.register(re);
  }
}
