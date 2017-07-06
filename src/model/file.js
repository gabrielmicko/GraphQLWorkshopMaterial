import speakers from '../db/speakers.json';
import talks from '../db/talks.json';

const getTalks = () => {
  return talks;
};

const getSpeakers = () => {
  return speakers;
};

const getTalksById = speakerId => {
  return getTalks().filter(talk => {
    return talk.speaker_id === speakerId;
  });
};

export { getTalks, getSpeakers, getTalksById };
