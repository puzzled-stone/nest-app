import { Module } from '@nestjs/common';
import { ApiLogService } from './api-log.service';
import { ApiLogController } from './api-log.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiLog } from './entities/api-log.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ApiLog])],
    controllers: [ApiLogController],
    providers: [ApiLogService],
    exports: [ApiLogService],
})
export class ApiLogModule {}
