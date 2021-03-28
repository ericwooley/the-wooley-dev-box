import { Mutation, Query, Resolver, Arg } from 'type-graphql';
import { List } from '@the-wooley-devbox/db';
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
    list.items = [];

    const manager = getManager();
    await manager.save(list);
    return list;
  }
}
