import { Field, ID, ObjectType } from 'type-graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { TodoItem } from './TodoItem';

@Entity()
@ObjectType()
export class List {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => [TodoItem], { nullable: true })
  @OneToMany(() => TodoItem, (item) => item.list)
  items: Promise<TodoItem[]>;
}
