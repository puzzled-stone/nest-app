import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SysConfigModule } from './sys_config/sys_config.module';
import { DatabaseModule } from './database/database.module';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [SysConfigModule, DatabaseModule],
  // 放在这里的 controller 会被自动注册到 app 中
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('api/sys-config');
  }
}
