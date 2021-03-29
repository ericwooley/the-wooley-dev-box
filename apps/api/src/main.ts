import 'reflect-metadata';
import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from '@the-wooley-devbox/graphql';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { List, TodoItem } from '@the-wooley-devbox/db';
(async () => {
  // connect to database, before we bootstrap the app.
  await createConnection({
    logging: process.env.NODE_ENV === 'development',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: [List, TodoItem],
  });
  const app = express();
  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to api!' });
  });
  const port = process.env.port || 3333;
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const server = new ApolloServer({ schema });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  await new Promise<void>((resolve) => app.listen({ port }, resolve));
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
})();
