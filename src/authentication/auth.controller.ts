import { Controller, Post, HttpStatus, HttpCode, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('token')
  @HttpCode(HttpStatus.OK)
  public async getToken() {
    return await this.authService.createToken();
  }

  @Get('authorized')
  public async authorized() {
    // tslint:disable-next-line:no-console
    console.log('Authorized route...');
  }
}