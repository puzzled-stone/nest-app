import {
    Body,
    Controller,
    Delete,
    FileTypeValidator,
    Get,
    MaxFileSizeValidator,
    Param,
    ParseFilePipe,
    Patch,
    Post,
    Res,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { RetDto } from 'src/common/dto/ret.dto';
import { DefaultFileStorage } from 'src/common/file/default-file-storage';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { Logger } from '@nestjs/common';
import { createReadStream } from 'fs';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    private readonly log = new Logger(UsersController.name);

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
        return RetDto.success(
            await this.usersService.findById(+id).then((user) => {
                console.log('测试是否调用了', user);
                return user;
            }),
        );
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

    @Post(':id/avatar')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage(new DefaultFileStorage('./uploads/avatar')),
        }),
    )
    async uploadAvatar(
        @Param('id') id: string,
        @UploadedFile(
            new ParseFilePipe({
                fileIsRequired: true,
                validators: [
                    new MaxFileSizeValidator({ maxSize: 100_000 }),
                    new FileTypeValidator({ fileType: 'image/png' }),
                ],
            }),
        )
        file: Express.Multer.File,
        @Res() res: any,
    ) {
        this.log.log('file', file);
        createReadStream(file.path).pipe(res);
        // return RetDto.success();
    }
}
