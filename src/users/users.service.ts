import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { instanceToPlain, plainToInstance } from 'class-transformer';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>,
    ) {}

    create(createUserDto: CreateUserDto) {
        const data = instanceToPlain(createUserDto);
        const user = plainToInstance(User, data);
        return this.userRepo.save(user);
    }

    findAll() {
        return this.userRepo.find();
    }

    findById(id: number) {
        return this.userRepo.findOneBy({ id: id });
    }

    findByUsername(username: string) {
        return this.userRepo.findOne({ where: { username: username } });
    }

    update(updateUserDto: UpdateUserDto) {
        const data = instanceToPlain(updateUserDto);
        const user = plainToInstance(User, data);
        return this.userRepo.update(user.id, user);
    }

    remove(id: number) {
        return this.userRepo.delete(id);
    }
}
