import Speaker from './speaker';
import Talk from './talk';
/**
 * Query type which holds the queryies which could be called.
 */
const Query = /* GraphQL */ `
  type Query {
    speakers: [Speaker!]
    talks: [Talk!]
  }
`;

/**
 * A schema containing Query and Mutation types
 */
const Schema = /* GraphQL */ `
  schema {
    query: Query
  }
`;

export default [Schema, Query, Speaker, Talk];
