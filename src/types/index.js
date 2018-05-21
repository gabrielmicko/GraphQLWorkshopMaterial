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

/**
 * Subscriptions
 */
const Subscription = /* GraphQL */ `
  type Subscription {
    newSpeaker: Speaker
  }
`;

/**
 * A schema containing Query and Mutation types
 */
const Schema = /* GraphQL */ `
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;

export default [Schema, Query, Mutation, Subscription, Speaker, Talk];
