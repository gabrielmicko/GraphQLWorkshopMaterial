import speakers from '../db/speakers.json';
import talks from '../db/talks.json';

/**
 * Returns all the talks
 * @returns {Array} Array containing the talks talks
 */
const getTalks = () => {};

/**
 * Returns all the speakers according to the arguments
 * If there are no arguments the function returns all
 * of the speakers. Only one argument is going to be passed
 * at a time.
 * @param  {String} args.id id of a speaker OR
 * @param  {String} args.name name of a speaker
 * @return {Array} Returns the filtered ot all of the speakers
 */
const getSpeakers = () => {};

/**
 * Get all of the talks by a speaker id.
 * @param  {String} speakerId [description]
 * @return {Array} Returns all of the talks where the
 * speaker_id's value matches the given argument.
 */
const getTalksBySpeakerId = () => {};

export { getTalks, getSpeakers, getTalksBySpeakerId };
