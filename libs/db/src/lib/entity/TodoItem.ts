import { Field, ID, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { List } from './List';

@Entity()
@ObjectType()
export class TodoItem {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ default: false })
  done: boolean;

  @Field(() => List)
  @ManyToOne(() => List, (list) => list.items)
  list: Promise<List>;
}
