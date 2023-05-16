import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('base_api_log')
export class ApiLog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    api: string;

    @Column()
    method: string;

    @Column()
    request_body: string;

    @Column()
    request_query: string;

    @Column()
    response_body: string;

    @Column()
    create_time: Date;

    @Column()
    update_time: Date;
}
