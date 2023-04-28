import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SysConfig {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    section: string;

    @Column()
    confKey: string;

    @Column()
    confValue: string;

    @Column()
    confDesc: string;

    @Column()
    ts: Date;
}
