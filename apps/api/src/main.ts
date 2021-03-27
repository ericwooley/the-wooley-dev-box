import 'reflect-metadata';
import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from '@the-wooley-devbox/graphql';
import { buildSchema } from 'type-graphql';
(async () => {
  const app = express();
  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to api!' });
  });
  const port = process.env.port || 3333;
  const schema = await buildSchema({
    resolvers,
  });

  const server = new ApolloServer({ schema });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  await new Promise<void>((resolve) => app.listen({ port }, resolve));
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
})();
