import speakers from '../db/speakers.json';
import talks from '../db/talks.json';

const getTalks = () => {
  return talks;
};

const getSpeakers = args => {
  if (args) {
    return speakers.filter(speaker => {
      if (args.id) {
        return speaker.id === args.id;
      } else if (speaker.id === args.name) {
        return speaker;
      }
    });
  }
  return speakers;
};

const getTalksBySpeakerId = speakerId => {
  return getTalks().filter(talk => {
    return talk.speaker_id === speakerId;
  });
};

export { getTalks, getSpeakers, getTalksBySpeakerId };
