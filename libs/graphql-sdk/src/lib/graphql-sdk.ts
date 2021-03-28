import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type List = {
  __typename?: 'List';
  id: Scalars['ID'];
  name: Scalars['String'];
  items: Array<TodoItem>;
};

export type Query = {
  __typename?: 'Query';
  myLists: Array<List>;
};

export type TodoItem = {
  __typename?: 'TodoItem';
  id: Scalars['ID'];
  name: Scalars['String'];
  done: Scalars['Boolean'];
  list: List;
};

export type MyListsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyListsQuery = (
  { __typename?: 'Query' }
  & { myLists: Array<(
    { __typename?: 'List' }
    & Pick<List, 'id' | 'name'>
    & { items: Array<(
      { __typename?: 'TodoItem' }
      & Pick<TodoItem, 'id' | 'name' | 'done'>
    )> }
  )> }
);


export const MyListsDocument = gql`
    query myLists {
  myLists {
    id
    name
    items {
      id
      name
      done
    }
  }
}
    `;

/**
 * __useMyListsQuery__
 *
 * To run a query within a React component, call `useMyListsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyListsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyListsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyListsQuery(baseOptions?: Apollo.QueryHookOptions<MyListsQuery, MyListsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyListsQuery, MyListsQueryVariables>(MyListsDocument, options);
      }
export function useMyListsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyListsQuery, MyListsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyListsQuery, MyListsQueryVariables>(MyListsDocument, options);
        }
export type MyListsQueryHookResult = ReturnType<typeof useMyListsQuery>;
export type MyListsLazyQueryHookResult = ReturnType<typeof useMyListsLazyQuery>;
export type MyListsQueryResult = Apollo.QueryResult<MyListsQuery, MyListsQueryVariables>;