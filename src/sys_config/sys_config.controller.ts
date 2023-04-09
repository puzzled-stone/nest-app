import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SysConfigService } from './sys_config.service';
import { CreateSysConfigDto } from './dto/create-sys_config.dto';

@Controller('sys-config')
export class SysConfigController {
  constructor(private readonly sysConfigService: SysConfigService) {}

  @Post()
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
