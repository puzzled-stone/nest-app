import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateSysConfigDto } from './dto/create-sys_config.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { SysConfigService } from './sys_config.service';

@Controller('api/sys-config')
export class SysConfigController {
    constructor(private sysConfigService: SysConfigService) {}

    @Post('page')
    page(@Body() pageDto: PageDto) {
        return this.sysConfigService.page(pageDto);
    }

    @Post('create')
    create(@Body() createSysConfigDto: CreateSysConfigDto) {
        return this.sysConfigService.create(createSysConfigDto);
    }

    @Get()
    findAll() {
        return this.sysConfigService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.sysConfigService.findOne(+id);
    }
}
