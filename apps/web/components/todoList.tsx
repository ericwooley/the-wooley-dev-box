import React from 'react';
import { useMyListsQuery } from '@the-wooley-devbox/graphql-sdk';
export const TodoList = () => {
  const { data, loading, error, refetch } = useMyListsQuery({ ssr: false });
  if (loading) return <h3>Loading...</h3>;
  if (error)
    return (
      <h3>
        Uh oh, something went wrong{' '}
        <button onClick={() => refetch()}>Try again</button>
      </h3>
    );
  return (
    <div>
      <h3>My Lists ({`${data.myLists.length}`}):</h3>
      <pre>{JSON.stringify(data.myLists, null, 2)}</pre>
    </div>
  );
};
