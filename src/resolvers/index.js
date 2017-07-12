import { getTalks, getSpeakers, getTalksBySpeakerId } from '../model/file';

/* 
 * Resolvers containing Queries and it's options, Mutation
 */
export default {
  Speaker: {
    talks: ({ id }) => {
      return getTalksBySpeakerId(id);
    }
  },
  Query: {
    talks: (_, args) => getTalks(),
    speakers: (_, args) => getSpeakers(args)
  }
};
