import { Controller, Post, HttpStatus, HttpCode, Get, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('token')
  @HttpCode(HttpStatus.OK)
  public async getToken(@Headers() headers) {
    return await this.authService.createToken(headers);
  }

  @Get('authorized')
  public async authorized() {
    // tslint:disable-next-line:no-console
    console.log('Authorized route...');
    return await this.authService.validateUser(true);
  }
}