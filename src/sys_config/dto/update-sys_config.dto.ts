import { PartialType } from '@nestjs/mapped-types';
import { CreateSysConfigDto } from './create-sys_config.dto';

export class UpdateSysConfigDto extends PartialType(CreateSysConfigDto) {}
