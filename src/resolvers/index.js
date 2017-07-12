import {
  getTalks,
  getSpeakers,
  getTalksBySpeakerId,
  saveSpeaker
} from '../model/db';

/* 
 * Resolvers containing Queries and it's options, Mutation
 */
export default {
  Speaker: {
    talks: ({ id }) => {
      return getTalksBySpeakerId(id);
    }
  },
  Mutation: {
    addSpeaker: (_, speaker) => {
      return new Promise((resolve, reject) => {
        saveSpeaker(speaker).then(result => {
          if (result.inserted && result.generated_keys.length) {
            getSpeakers({ id: result.generated_keys[0] }).then(res => {
              resolve(res[0]);
            });
          } else {
            reject();
          }
        });
      });
    }
  },
  Query: {
    talks: (_, args) => getTalks(),
    speakers: (_, args) => getSpeakers(args)
  }
};
