import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { execute, subscribe } from 'graphql';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { SERVER } from './config/config.json';
import schema from './Schema';

const PORT = SERVER.PORT;
const server = express();

server.use('*', cors({ origin: `http://localhost:${PORT}` }));

server.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema
  })
);

server.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`
  })
);

const ws = createServer(server);
ws.listen(PORT, () => {
  console.log(`🌎 Server is now running on http://localhost:${PORT}`);
  console.log(`👂 Subscription ws endpoint is now running on ws://localhost:${PORT}/subscriptions`);
  console.log(`🌎 GraphiQL now running on http://localhost:${PORT}/graphiql`);

  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema
    },
    {
      server: ws,
      path: '/subscriptions'
    }
  );
});
