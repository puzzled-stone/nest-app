import { Controller } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Crud } from '@nestjsx/crud';
import { Menu } from './entities/menu.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateMenuDto } from './dto/create-menu.dto';

@Crud({
    model: {
        type: Menu,
    },
    dto: {
        create: CreateMenuDto,
    },
})
@ApiTags('menu')
@Controller('api/menu')
export class MenuController {
    constructor(private menuService: MenuService) {}
}
