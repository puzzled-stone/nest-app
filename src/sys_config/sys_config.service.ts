import { Inject, Injectable } from '@nestjs/common';
import { CreateSysConfigDto } from './dto/create-sys_config.dto';
import { SysConfig } from './entities/sys_config.entity';
import { Repository } from 'typeorm';
import { paginate } from 'nestjs-typeorm-paginate';
import { PageRetDto } from 'src/common/dto/page-ret.dto';
import { PageDto } from 'src/common/dto/page.dto';

@Injectable()
export class SysConfigService {
  constructor(
    @Inject('SYS_CONFIG_REPOSITORY')
    private sysConfigRepository: Repository<SysConfig>,
  ) {}

  async page(pageDto: PageDto): Promise<PageRetDto<SysConfig>> {
    const { page, size, keyword } = pageDto;
    const queryBuilder = this.sysConfigRepository
      .createQueryBuilder('sys_config')
      .orderBy();
    if (keyword) {
      queryBuilder
        .where('sys_config.conf_key like :keyword', {
          keyword: `%${keyword}%`,
        })
        .orWhere('sys_config.conf_value like :keyword', {
          keyword: `%${keyword}%`,
        });
    }
    const pagination = await paginate<SysConfig>(queryBuilder, {
      page: page,
      limit: size,
    });
    return new PageRetDto<SysConfig>(pagination);
  }

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
