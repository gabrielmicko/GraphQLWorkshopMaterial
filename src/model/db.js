import {
  getAll,
  getByFilters,
  connectToDB,
  insertData
} from '../rethink/helper';

let connection = false;
connectToDB().then(conn => {
  connection = conn;
});

const getTalks = () => {
  return getAll(connection, 'jsdays', 'talks');
};

const getSpeakers = filter => {
  if (filter) {
    return getByFilters(connection, 'jsdays', 'speakers', filter);
  }
  return getAll(connection, 'jsdays', 'speakers');
};

const getTalksBySpeakerId = speakerId => {
  return getByFilters(connection, 'jsdays', 'talks', { speaker_id: speakerId });
};

const saveSpeaker = speakerData => {
  return new Promise(resolve => {
    let insertPromise = insertData(connection, 'jsdays', 'speakers', [
      speakerData
    ]);
    insertPromise.then(result => {
      resolve(result[0]);
    });
  });
};

export { getTalks, getSpeakers, getTalksBySpeakerId, connection, saveSpeaker };
