import { Body, Controller, Get, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthService } from 'src/signup/auth.service';

@Controller('login')
export class LoginController {
    constructor(private authService: AuthService) {}

    @Post()
    login(@Body() req: {email: string, password: string}) {
        return this.authService.login(req.email, req.password);
    }

    @UseGuards(AuthGuard)
    @Get('/me')
    findme(){
        return "Hello";
    }
    
}
