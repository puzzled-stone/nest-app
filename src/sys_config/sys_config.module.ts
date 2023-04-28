import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SysConfigService } from './sys_config.service';
import { SysConfigController } from './sys_config.controller';
import { DatabaseModule } from 'src/database/database.module';
import { sysConfigProviders } from './sys_config.providers';
import { SysConfigMiddleware } from './sys_config.middleware';

@Module({
    imports: [DatabaseModule],
    controllers: [SysConfigController],
    providers: [SysConfigService, ...sysConfigProviders],
})
export class SysConfigModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(SysConfigMiddleware).forRoutes('api/sys-config');
    }
}
