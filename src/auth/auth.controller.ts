import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SkipAuth } from 'src/decorator/skip-auth.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @SkipAuth()
    @Post('signIn')
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }

    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
