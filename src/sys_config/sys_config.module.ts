import { Module } from '@nestjs/common';
import { SysConfigService } from './sys_config.service';
import { SysConfigController } from './sys_config.controller';
import { DatabaseModule } from 'src/database/database.module';
import { sysConfigProviders } from './sys_config.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [SysConfigController],
  providers: [SysConfigService, ...sysConfigProviders],
})
export class SysConfigModule {}
