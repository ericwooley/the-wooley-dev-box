import { Field, ID, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
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

  @Field(() => [TodoItem])
  @OneToMany(() => TodoItem, (item) => item.list)
  items: TodoItem[];
}
