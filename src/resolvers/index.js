import { getTalks, getSpeakers, getTalksById } from '../model/db';

export default {
  Speaker: {
    talks: ({ id }) => {
      return getTalksById(id);
    },
  },
  Mutation: {
  	//addSpeaker
  },
  Query: {
    talks: (_, args) => getTalks(args),
    speakers: (_, args) => getSpeakers(args),
  },
};
