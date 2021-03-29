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
  items?: Maybe<Array<TodoItem>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createList: List;
  addTodoItem: List;
};


export type MutationCreateListArgs = {
  name: Scalars['String'];
};


export type MutationAddTodoItemArgs = {
  todoName: Scalars['String'];
  listId: Scalars['Float'];
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
    & { items?: Maybe<Array<(
      { __typename?: 'TodoItem' }
      & Pick<TodoItem, 'id' | 'name' | 'done'>
    )>> }
  )> }
);

export type CreateListMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateListMutation = (
  { __typename?: 'Mutation' }
  & { createList: (
    { __typename?: 'List' }
    & Pick<List, 'id' | 'name'>
    & { items?: Maybe<Array<(
      { __typename?: 'TodoItem' }
      & Pick<TodoItem, 'name' | 'id' | 'done'>
    )>> }
  ) }
);

export type AddTodoItemMutationVariables = Exact<{
  listId: Scalars['Float'];
  todoName: Scalars['String'];
}>;


export type AddTodoItemMutation = (
  { __typename?: 'Mutation' }
  & { addTodoItem: (
    { __typename?: 'List' }
    & Pick<List, 'id' | 'name'>
  ) }
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
export const CreateListDocument = gql`
    mutation createList($name: String!) {
  createList(name: $name) {
    id
    name
    items {
      name
      id
      done
    }
  }
}
    `;
export type CreateListMutationFn = Apollo.MutationFunction<CreateListMutation, CreateListMutationVariables>;

/**
 * __useCreateListMutation__
 *
 * To run a mutation, you first call `useCreateListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createListMutation, { data, loading, error }] = useCreateListMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateListMutation(baseOptions?: Apollo.MutationHookOptions<CreateListMutation, CreateListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateListMutation, CreateListMutationVariables>(CreateListDocument, options);
      }
export type CreateListMutationHookResult = ReturnType<typeof useCreateListMutation>;
export type CreateListMutationResult = Apollo.MutationResult<CreateListMutation>;
export type CreateListMutationOptions = Apollo.BaseMutationOptions<CreateListMutation, CreateListMutationVariables>;
export const AddTodoItemDocument = gql`
    mutation addTodoItem($listId: Float!, $todoName: String!) {
  addTodoItem(todoName: $todoName, listId: $listId) {
    id
    name
  }
}
    `;
export type AddTodoItemMutationFn = Apollo.MutationFunction<AddTodoItemMutation, AddTodoItemMutationVariables>;

/**
 * __useAddTodoItemMutation__
 *
 * To run a mutation, you first call `useAddTodoItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoItemMutation, { data, loading, error }] = useAddTodoItemMutation({
 *   variables: {
 *      listId: // value for 'listId'
 *      todoName: // value for 'todoName'
 *   },
 * });
 */
export function useAddTodoItemMutation(baseOptions?: Apollo.MutationHookOptions<AddTodoItemMutation, AddTodoItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTodoItemMutation, AddTodoItemMutationVariables>(AddTodoItemDocument, options);
      }
export type AddTodoItemMutationHookResult = ReturnType<typeof useAddTodoItemMutation>;
export type AddTodoItemMutationResult = Apollo.MutationResult<AddTodoItemMutation>;
export type AddTodoItemMutationOptions = Apollo.BaseMutationOptions<AddTodoItemMutation, AddTodoItemMutationVariables>;