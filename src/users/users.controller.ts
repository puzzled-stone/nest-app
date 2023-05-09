import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RetDto } from 'src/common/dto/ret.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        const data = await this.usersService.create(createUserDto);
        return RetDto.success(data.id);
    }

    @Get()
    async findAll() {
        const data = await this.usersService.findAll();
        return RetDto.success(data);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return RetDto.success(await this.usersService.findById(+id));
    }

    @Patch()
    async update(@Body() updateUserDto: UpdateUserDto) {
        await this.usersService.update(updateUserDto);
        return RetDto.success();
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.usersService.remove(+id);
        return RetDto.success();
    }
}
