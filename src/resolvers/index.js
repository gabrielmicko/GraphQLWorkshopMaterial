import { getTalks, getSpeakers, getTalksById, saveSpeaker } from '../model/db';

export default {
  Speaker: {
    talks: ({ id }) => {
      return getTalksById(id);
    }
  },
  Mutation: {
    addSpeaker: (_, speaker) => {
      return new Promise((resolve, reject) => {
        saveSpeaker(speaker).then(result => {
          console.log(result.inserted);
          if (result.inserted && result.generated_keys.length) {
            console.log(result.generated_keys[0]);
            resolve(getSpeakers({ id: result.generated_keys[0] }));
          } else {
            reject();
          }
        });
      });
    }
  },
  Query: {
    talks: (_, args) => getTalks(args),
    speakers: (_, args) => getSpeakers(args)
  }
};

// [ { deleted: 0,
//     errors: 0,
//     generated_keys: [ 'c7544fea-73bd-4d5a-a356-5791a4721cd1' ],
//     inserted: 1,
//     replaced: 0,
//     skipped: 0,
//     unchanged: 0 } ]
