import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ApiLogModule } from './api-log/api-log.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { dbConfig } from './database/db.config';
import { CustomExceptionFilter } from './filter/custom-exception.filter';
import { ApiLogInterceptor } from './interceptors/api-log.interceptor';
import { UsersModule } from './users/users.module';

@Module({
    imports: [TypeOrmModule.forRoot(dbConfig), AuthModule, UsersModule, ApiLogModule],
    // 放在这里的 controller 会被自动注册到 app 中
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: 'APP_INTERCEPTOR',
            useClass: ApiLogInterceptor,
        },
        {
            // provide名称固定的
            provide: 'APP_FILTER',
            useClass: CustomExceptionFilter,
        },
        // {
        //     provide: 'APP_GUARD',
        //     useClass: AuthGuard,
        // },
    ],
})
export class AppModule {
    constructor(private dataSource: DataSource) {}
}
