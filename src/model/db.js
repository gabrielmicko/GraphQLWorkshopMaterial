import {
  getAll,
  getByFilters,
  connectToDB,
  insertData
} from '../rethink/helper';

/**
 * Initiating a connection with the database
 */
let rethinkDBConnection = false;
const getConnection = () => {
  if (!rethinkDBConnection) {
    rethinkDBConnection = connectToDB();
    return rethinkDBConnection;
  } else {
    return rethinkDBConnection;
  }
};

/**
 * Retuns with a new Promise
 * Gets the connection then
 * Resolves with all of the talks in the database
 * @returns {Promise<Array>} Promise resolving an Array containing the talks
 */
const getTalks = () => {
  return new Promise(resolve => {
    getConnection().then(connection => {
      resolve(getAll(connection, 'jsdays', 'talks'));
    });
  });
};

/**
 * Returns with a new Promise
 * Gets the connection then
 * Resolves with all of the speakers by a filter object
 * If there are no arguments the function returns all
 * of the speakers.
 * Only one argument can be passed at a time. {name: "Gabriel Micko"}
 * @param  {String} args.id id of a speaker OR
 * @param  {String} args.name name of a speaker
 * @return {Promise<Array>} Promise resolving an Array containing the speakers
 */
const getSpeakers = filter => {
  return new Promise(resolve => {
    getConnection().then(connection => {
      if (filter) {
        resolve(getByFilters(connection, 'jsdays', 'speakers', filter));
      }
      resolve(getAll(connection, 'jsdays', 'speakers'));
    });
  });
};

/**
 * Returns with a new Promise
 * Gets the connection then
 * Resolves with all of the speakers by a SpeakerID
 * @param  {String} speakerId [description]
 * @return {Promise<Array>} Promis resolving an Array containing all of the talks where the
 * speaker_id's value matches the given argument.
 */
const getTalksBySpeakerId = speakerId => {
  return new Promise(resolve => {
    getConnection().then(connection => {
      resolve(
        getByFilters(connection, 'jsdays', 'talks', { speaker_id: speakerId })
      );
    });
  });
};

/**
 * Returns with a new Promise
 * Gets the connection then
 * Resolves with an insert function, which saves the speaker data
 * @param  {Object} speakerData Speaker data (ie. {name: "Gabriel", bio: "FE dev"})
 * @return {Promise<Array>} Promise resolving an array. The result is RethinkDB specific,
 * it provides stats about your query. Since it passes only one object in an array to insertData,
 * It has to resolve the first result from the array.
 */
const saveSpeaker = speakerData => {
  return new Promise(resolve => {
    getConnection().then(connection => {
      let insertPromise = insertData(connection, 'jsdays', 'speakers', [
        speakerData
      ]);
      insertPromise.then(result => {
        resolve(result[0]);
      });
    });
  });
};

export { getTalks, getSpeakers, getTalksBySpeakerId, saveSpeaker };
