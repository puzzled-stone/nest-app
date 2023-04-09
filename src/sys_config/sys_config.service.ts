import { Inject, Injectable } from '@nestjs/common';
import { CreateSysConfigDto } from './dto/create-sys_config.dto';
import { SysConfig } from './entities/sys_config.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SysConfigService {
  constructor(
    @Inject('SYS_CONFIG_REPOSITORY')
    private sysConfigRepository: Repository<SysConfig>,
  ) {}

  async findAll(): Promise<SysConfig[]> {
    return this.sysConfigRepository.find();
  }

  async findOne(id: number): Promise<SysConfig> {
    return this.sysConfigRepository.findOneBy({
      id: id,
    });
  }

  async create(createSysConfigDto: CreateSysConfigDto): Promise<SysConfig> {
    const sysConfig = new SysConfig();
    sysConfig.section = createSysConfigDto.section;
    sysConfig.confKey = createSysConfigDto.confKey;
    sysConfig.confValue = createSysConfigDto.confValue;
    sysConfig.confDesc = createSysConfigDto.confDesc;
    return this.sysConfigRepository.save(sysConfig);
  }
}
