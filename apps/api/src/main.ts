import 'reflect-metadata';
import 'graphql';
import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from '@the-wooley-devbox/graphql';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { List, TodoItem } from '@the-wooley-devbox/db';
const envDependentVars = process.env.DATABASE_URL
  ? {
      url: `${process.env.DATABASE_URL}`,
      // https://devcenter.heroku.com/articles/heroku-postgresql#connecting-in-node-js
      ssl: { rejectUnauthorized: false },
    }
  : {
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      host: 'localhost',
      port: 5432,
    };

(async () => {
  // connect to database, before we bootstrap the app.
  await createConnection({
    type: 'postgres',
    synchronize: false,
    entities: [List, TodoItem],
    ...envDependentVars,
  });
  const app = express();
  setInterval(() => {
    console.log('running', new Date().toISOString());
  }, 1000);
  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to api!' });
  });
  const port = process.env.PORT || 3333;
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
