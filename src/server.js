import Express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema';

console.log('🔍 - Initiating files for GraphQL.');
const APP_PORT = 3000;
const app = Express();

app.use(
  '/graphql',
  GraphHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
  })
);

app.listen(APP_PORT, () => {
  console.log(`👂 - GraphQL server is listening on port ${APP_PORT}`);
  console.log(
    `🌎 - Link for the application is http://localhost:${APP_PORT}/graphql`
  );
});
