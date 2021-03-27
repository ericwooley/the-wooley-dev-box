import { Query, Resolver } from 'type-graphql';

@Resolver()
export class ListResolver {
  @Query(() => [String])
  async myLists(): Promise<string[]> {
    return ['We did it!'];
  }
}
