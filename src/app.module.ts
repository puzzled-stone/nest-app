import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SysConfigModule } from './sys_config/sys_config.module';
import { DatabaseModule } from './database/database.module';
import { logger } from './logger.middleware';
import { CustomExceptionFilter } from './filter/custom-exception.filter';

@Module({
    imports: [DatabaseModule, SysConfigModule],
    // 放在这里的 controller 会被自动注册到 app 中
    controllers: [AppController],
    providers: [
        AppService,
        {
            // provide名称固定的
            provide: 'APP_FILTER',
            useClass: CustomExceptionFilter,
        },
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(logger).forRoutes('api/sys-config');
    }
}
