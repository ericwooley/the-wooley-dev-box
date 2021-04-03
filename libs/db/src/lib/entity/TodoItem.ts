import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TodoItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: false })
  done: boolean;
}
