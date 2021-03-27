import * as express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
(async () => {
  const app = express();
  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to api!' });
  });
  const port = process.env.port || 3333;
  // Construct a schema, using GraphQL schema language
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;
  // Provide resolver functions for your schema fields
  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  };
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  await new Promise<void>((resolve) => app.listen({ port }, resolve));
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
})();
