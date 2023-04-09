import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SysConfigService } from './sys_config.service';
import { CreateSysConfigDto } from './dto/create-sys_config.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { log } from 'console';

@Controller('sys-config')
export class SysConfigController {
  constructor(private readonly sysConfigService: SysConfigService) {}

  @Post('page')
  page(@Body() pageDto: PageDto) {
    log('page');
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
