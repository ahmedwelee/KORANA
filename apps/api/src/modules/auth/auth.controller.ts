import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Body() dto: SignUpDto) {
    return this.authService.signUp(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Get('oauth/google')
  googleOAuthScaffold() {
    return this.authService.oauthScaffold('google');
  }

  @Get('oauth/apple')
  appleOAuthScaffold() {
    return this.authService.oauthScaffold('apple');
  }

  @Post('phone/send-code')
  sendPhoneCode(@Query('phone') phone: string) {
    return this.authService.phoneVerificationScaffold(phone);
  }
}
