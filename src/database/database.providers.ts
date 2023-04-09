import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '000000',
        database: 'test',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        logging: true,
        namingStrategy: new SnakeNamingStrategy(),
        timezone: '+08:00',
      });
      return dataSource.initialize();
    },
  },
];
