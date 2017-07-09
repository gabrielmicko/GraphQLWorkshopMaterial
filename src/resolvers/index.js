import { getTalks, getSpeakers } from '../model/file';

/* 
 * Resolvers containing Queries and it's options, Mutation
 */
export default {
  Query: {
    talks: (_, args) => getTalks(),
    speakers: (_, args) => getSpeakers()
  }
};
