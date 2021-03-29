import React from 'react';
import {
  useMyListsQuery,
  useCreateListMutation,
  useAddTodoItemMutation,
  useToggleTodoItemMutation,
} from '@the-wooley-devbox/graphql-sdk';
export const TodoList = () => {
  const [toggleTodoItem] = useToggleTodoItemMutation();
  const [createList] = useCreateListMutation();
  const [addTodoItem] = useAddTodoItemMutation();
  const { data, loading, error, refetch } = useMyListsQuery({ ssr: false });
  if (loading || !data) return <h3>Loading...</h3>;
  if (error)
    return (
      <h3>
        Uh oh, something went wrong!
        <hr />
        <button onClick={() => refetch()}>Try again</button>
      </h3>
    );
  return (
    <div>
      <h3>
        My Lists ({`${data.myLists.length}`}){' '}
        <button
          onClick={() => {
            createList({
              variables: {
                name:
                  prompt('What do you want to name your list?') ||
                  'Untitled List',
              },
            }).then(() => refetch());
          }}
        >
          +
        </button>
        :
      </h3>
      {data.myLists.length === 0 && (
        <h4>Looks like you don't have any lists yet.</h4>
      )}
      {data.myLists.map((list) => (
        <div key={list.id}>
          <h4>{list.name} </h4>
          {list.items?.map((todo) => (
            <div key={todo.id}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={(e) => {
                  toggleTodoItem({
                    variables: {
                      done: e.target.checked,
                      todoId: parseInt(todo.id, 10),
                    },
                  }).then(() => refetch());
                }}
              />
              &nbsp;
              <strong>{todo.name}</strong>
            </div>
          ))}
          <button
            onClick={() => {
              addTodoItem({
                variables: {
                  listId: parseInt(list.id, 10),
                  todoName:
                    prompt('What do you want to name your todo?') ||
                    'Untitled Todo',
                },
              }).then(() => refetch());
            }}
          >
            + Add Todo Item
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
};
