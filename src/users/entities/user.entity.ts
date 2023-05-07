import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('base_user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    create_time: Date;

    @Column()
    update_time: Date;
}
