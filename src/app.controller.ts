import { Controller, Get, Param, Query, Redirect, Session } from '@nestjs/common';
import { AppService } from './app.service';
import { log } from 'console';
import { Roles } from './decorator/roles.decorator';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('ab*')
    @Redirect('/hello', 301)
    getHello(@Query() query, @Param() param, @Session() session): string {
        log('query:', query);
        log('param:', param);
        log('session:', session);
        return this.appService.getHello();
    }

    @Get('hello')
    @Roles('admin')
    getHello2(): string {
        return 'redirect';
    }
}
