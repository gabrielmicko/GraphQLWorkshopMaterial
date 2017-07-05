import speakers from '../db/joined/speakers.json';
import talks from '../db/joined/talks.json';

const getTalks = () => {
  return new Promise(resolve => {
    resolve(talks);
  });
};

const getSpeakers = () => {
  return speakers;
  /* return new Promise(resolve => {
    resolve(speakers);
  });*/
};

const getTalksById = speakerId => {
  return talks.filter(talk => {
    return talk.speaker_id === speakerId;
  });
};

export default {
  Speaker: {
    talks: ({ id }) => {
      return getTalksById(id);
    },
  },
  Query: {
    talks: (_, args) => getTalks(args),
    speakers: (_, args) => getSpeakers(args),
  },
};
