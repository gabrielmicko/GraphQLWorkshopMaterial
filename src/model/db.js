import {
  getAll,
  getByFilters,
  connectToDB,
  insertData
} from '../rethink/helper';

/**
 * Initiating a connection with the database
 */
let connection = false;
connectToDB().then(conn => {
  connection = conn;
});

/**
 * Returns all the talks
 * @returns {Promise<Array>} Promise resolving an Array containing the talks
 */
const getTalks = () => {
  return getAll(connection, 'jsdays', 'talks');
};

/**
 * Returns all the speakers according to the arguments
 * If there are no arguments the function returns all
 * of the speakers. Only one argument is going to be passed
 * at a time.
 * @param  {String} args.id id of a speaker OR
 * @param  {String} args.name name of a speaker
 * @return {Promise<Array>} Promise resolving an Array containing the speakers
 */
const getSpeakers = filter => {
  if (filter) {
    return getByFilters(connection, 'jsdays', 'speakers', filter);
  }
  return getAll(connection, 'jsdays', 'speakers');
};

/**
 * Get all of the talks by a speaker id.
 * @param  {String} speakerId [description]
 * @return {Promise<Array>} Promis resolving an Array containing all of the talks where the
 * speaker_id's value matches the given argument.
 */
const getTalksBySpeakerId = speakerId => {
  return getByFilters(connection, 'jsdays', 'talks', { speaker_id: speakerId });
};

/**
 * Saves one speaker in the database
 * @param  {Object} speakerData Speaker data (ie. {name: "Gabriel", bio: "FE dev"})
 * @return {Promise<Array>} Promise resolving an array. The result is RethinkDB specific,
 * it provides stats about your query. Since it passes only one object in an array to insertData,
 * It has to resolve the first result from the array.
 */
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
