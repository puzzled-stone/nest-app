import { Controller, Get, Param } from '@nestjs/common';
import { ApiLogService } from './api-log.service';

@Controller('api-log')
export class ApiLogController {
    constructor(private readonly apiLogService: ApiLogService) {}

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.apiLogService.findOne(+id);
    }
}
