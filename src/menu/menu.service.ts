import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Menu } from './entities/menu.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MenuService extends TypeOrmCrudService<Menu> {
    constructor(@InjectRepository(Menu) repo) {
        super(repo);
    }
}
