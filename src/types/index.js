import Speaker from './speaker';
import Talk from './talk';

const Query = /* GraphQL */ `
  type Query {
    speakers(id: String, name: String): [Speaker!]
    talks: [Talk!]
  }
`;

const Schema = /* GraphQL */ `
  schema {
    query: Query,
    mutation: Mutation
  }
`;

const Mutation = /* GraphQL */ `
  type Mutation {
    addSpeaker(
      name: String!
      bio: String!
      facebook: String
      github: String
      linkedin: String
      twitter: String
      position: String!
      name: String!
      photo: String!
    ) : Speaker
  }
`;

export default [Schema, Query, Mutation, Speaker, Talk];
