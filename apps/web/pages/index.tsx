import React from 'react';

import styles from './index.module.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { TodoList } from '../components/todoList';

const client = new ApolloClient({
  // window is not defined on the server
  ssrMode: typeof window === 'undefined',
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});

export function Index() {
  return (
    <ApolloProvider client={client}>
      <div className={styles.page}>
        <TodoList />
      </div>
    </ApolloProvider>
  );
}

export default Index;
