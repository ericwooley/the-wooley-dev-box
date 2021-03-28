import React from 'react';
import { useMyListsQuery } from '@the-wooley-devbox/graphql-sdk';
export const TodoList = () => {
  const { data, loading, error, refetch } = useMyListsQuery({ ssr: false });
  if (loading) return <h3>Loading...</h3>;
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
      <h3>My Lists ({`${data.myLists.length}`}):</h3>
      {data.myLists.length === 0}{' '}
      <h4>Looks like you don't have any lists yet.</h4>
      {data.myLists.map((list) => (
        <div key={list.id}>
          {list.items.map((todo) => (
            <div key={todo.id}>
              <input type="checkbox" checked={todo.done} />
              &nbsp;
              <strong>{todo.name}</strong>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
