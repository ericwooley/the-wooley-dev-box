import { BuildSchemaOptions } from 'type-graphql';
import { ListResolver } from './list/list-resolver';
export const resolvers: BuildSchemaOptions['resolvers'] = [ListResolver];
