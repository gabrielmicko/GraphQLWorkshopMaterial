import { pubsub } from '../subscriptions/pubsub';
import { getTalks, getSpeakers, getTalksBySpeakerId, saveSpeaker, subscribeToSpeakersChanges } from '../model/db';

let speakerChangesPromise = subscribeToSpeakersChanges(function(result) {
  pubsub.publish('NEW_SPEAKER', { newSpeaker: result });
});

speakerChangesPromise.catch(error => {
  console.error(('Could not subscribe to speaker changes, reason: ', error));
});

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
  },

  Subscription: {
    newSpeaker: {
      subscribe: () => pubsub.asyncIterator('NEW_SPEAKER')
    }
  }
};
