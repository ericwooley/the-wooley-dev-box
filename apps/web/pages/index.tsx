import React from 'react';

import styles from './index.module.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});

export function Index() {
  return (
    <ApolloProvider client={client}>
      <div className={styles.page}>
        <h3>My Lists (25):</h3>
      </div>
    </ApolloProvider>
  );
}

export default Index;
