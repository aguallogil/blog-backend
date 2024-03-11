import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('blogs')
export class BlogPost {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    title: string;

    @Column()
    author: string;

    @Column('text')
    content: string;

    @CreateDateColumn()
    createdAt: Date;
}
