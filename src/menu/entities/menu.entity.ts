import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('base_menu')
export class Menu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    parent_id: number;

    @Column()
    path: string;

    @Column()
    icon: string;

    @Column()
    sort: number;

    @Column()
    create_time: Date;

    @Column()
    update_time: Date;
}
