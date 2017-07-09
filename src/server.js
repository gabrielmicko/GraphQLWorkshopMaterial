import Express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema';

console.log('🔍 - Initiating files for GraphQL.');
const APP_PORT = 3000;
const APP_PATH = 'graphql';
const app = Express();

/**
 * Express to use GraphHTTP
 */
app.use(
  '/' + APP_PATH,
  GraphHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
  })
);

app.listen(APP_PORT, () => {
  console.log(`👂 - GraphQL server is listening on port ${APP_PORT}`);
  console.log(
    `🌎 - Link for the application is http://localhost:${APP_PORT}/${APP_PATH}`
  );
});
