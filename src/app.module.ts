import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomExceptionFilter, UnauthorizedExceptionFilter } from './filter/custom-exception.filter';
import { AuthGuard } from './guard/auth.gurad';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './database/db.config';

@Module({
    imports: [TypeOrmModule.forRoot(dbConfig), AuthModule, UsersModule],
    // 放在这里的 controller 会被自动注册到 app 中
    controllers: [AppController],
    providers: [
        AppService,
        {
            // provide名称固定的
            provide: 'APP_FILTER',
            useClass: CustomExceptionFilter,
        },
        {
            // provide名称固定的
            provide: 'APP_FILTER',
            useClass: UnauthorizedExceptionFilter,
        },
        {
            provide: 'APP_GUARD',
            useClass: AuthGuard,
        },
    ],
})
export class AppModule {
    constructor(private dataSource: DataSource) {}
}
