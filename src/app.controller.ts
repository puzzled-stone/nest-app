import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local/local-auth.guard';
import { SkipAuth } from './decorator/skip-auth.decorator';

@Controller()
export class AppController {
    constructor(private authService: AuthService) {}

    @SkipAuth()
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}
