/**
 * Import makeExecutableSchema, resolvers, typeDefs
 * Call & export makeExecutableSchema, pass the imported variables
 */
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import typeDefs from './types';

export default makeExecutableSchema({
  resolvers,
  typeDefs
});
