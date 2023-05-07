import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const dbConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '000000',
    database: 'playground',
    // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
    logging: true,
    namingStrategy: new SnakeNamingStrategy(),
    timezone: '+08:00',
};
