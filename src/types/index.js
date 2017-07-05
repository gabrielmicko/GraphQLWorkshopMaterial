import Speaker from './speaker';
import Talk from './talk';

const Query = /* GraphQL */`
  type Query {
    speakers: [Speaker!]
    talks: [Talk!]
  }
`;

const Schema = /* GraphQL */`
  schema {
    query: Query
  }
`;

export default [Schema, Query, Speaker, Talk];