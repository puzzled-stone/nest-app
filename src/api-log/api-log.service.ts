import { Injectable } from '@nestjs/common';
import { ApiLog } from './entities/api-log.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { CreateApiLogDto } from './dto/create-api-log.dto';

@Injectable()
export class ApiLogService {
    constructor(
        @InjectRepository(ApiLog)
        private apiLogRepo: Repository<ApiLog>,
    ) {}

    async create(createApiLogDto: CreateApiLogDto) {
        try {
            const data = instanceToPlain(createApiLogDto);
            const apiLog = plainToInstance(ApiLog, data);
            await this.apiLogRepo.save(apiLog);
            return apiLog.id;
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    async findOne(id: number) {
        return await this.apiLogRepo.findOne({ where: { id: id } });
    }
}
