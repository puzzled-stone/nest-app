import { DataSource } from 'typeorm';
import { SysConfig } from './entities/sys_config.entity';

export const sysConfigProviders = [
    {
        provide: 'SYS_CONFIG_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(SysConfig),
        inject: ['DATA_SOURCE'],
    },
];
