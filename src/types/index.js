import Speaker from './speaker';
import Talk from './talk';
/**
 * Query type which holds the queryies which could be called.
 */
const Query = /* GraphQL */ `
  type Query {
    speakers(id: String, name: String): [Speaker!]
    talks: [Talk!]
  }
`;

/**
 * Mutations
 */
const Mutation = /* GraphQL */ `
`;

/**
 * A schema containing Query and Mutation types
 */
const Schema = /* GraphQL */ `
  schema {
    query: Query
    mutation: Mutation
  }
`;

export default [Schema, Query, Mutation, Speaker, Talk];
