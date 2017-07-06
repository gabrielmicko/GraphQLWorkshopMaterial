import Speaker from './speaker';
import Talk from './talk';

const Query = /* GraphQL */`
  type Query {
    speakers(name: String): [Speaker!]
    talks: [Talk!]
  }
`;

const Schema = /* GraphQL */`
  schema {
    query: Query
  }
`;

export default [Schema, Query, Speaker, Talk];