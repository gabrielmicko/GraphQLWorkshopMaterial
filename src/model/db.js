import { getAll, getByFilters, connectToDB } from '../rethink/helper';

let connection = false;
connectToDB().then(conn => {
  connection = conn;
});

const getTalks = () => {
  return getAll(connection, 'jsdays', 'talks');
};

const getSpeakers = ({ name }) => {
  if (name) {
     return getByFilters(connection, 'jsdays', 'speakers', { name: name });
  }
  return getAll(connection, 'jsdays', 'speakers');
};

const getTalksById = speakerId => {
  return getByFilters(connection, 'jsdays', 'talks', { speaker_id: speakerId });
};

export { getTalks, getSpeakers, getTalksById, connection };
