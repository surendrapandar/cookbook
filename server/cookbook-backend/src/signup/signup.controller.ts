import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('signup')
export class SignupController {
  constructor(private signupService: AuthService) {}

  @Post()
  createUserAcount(@Body() body: any) {
    const { username, password, email } = body;
    return this.signupService.createUserAccount(username, password, email);
  }
}
