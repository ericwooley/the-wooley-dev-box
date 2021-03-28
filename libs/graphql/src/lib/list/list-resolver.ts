import { Query, Resolver } from 'type-graphql';
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
}
