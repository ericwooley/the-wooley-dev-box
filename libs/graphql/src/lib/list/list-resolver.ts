import { Mutation, Query, Resolver, Arg } from 'type-graphql';
import { List, TodoItem } from '@the-wooley-devbox/db';
import { getManager } from 'typeorm';
@Resolver()
export class ListResolver {
  // We want to return an array of lists.
  @Query(() => [List])
  // update the Promise Return to match an array of lists
  async myLists(): Promise<List[]> {
    const manager = getManager();
    // return all lists
    return await manager.find(List);
  }

  @Mutation(() => List)
  async createList(@Arg('name') name: string): Promise<List> {
    const list = new List();
    list.name = name;
    list.items = Promise.resolve([]);

    const manager = getManager();
    await manager.save(list);
    return list;
  }

  @Mutation(() => List)
  async addTodoItem(
    @Arg('listId') id: number,
    @Arg('todoName') todoName: string
  ): Promise<List> {
    const manager = getManager();
    const list = await manager.findOne(List, { id });
    const todo = new TodoItem();
    todo.name = todoName;
    todo.done = false;
    await manager.save(todo);
    const items = await Promise.resolve(list.items || []);
    items.push(todo);
    list.items = Promise.resolve(items);
    await manager.save(list);
    return list;
  }
}
