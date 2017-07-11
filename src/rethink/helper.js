import r from 'rethinkdb';

/**
 * Creates a connection with the database.
 * The connection details are defined in this function.
 * @return {Promise<Object: conn>} Returns a Promise with a connnection
 */
const connectToDB = () => {};

/**
 * Creates a database according to the given argument.
 * @param  {Object} conn Database connection
 * @param  {String} dbName Database name
 * @return {Promise} A promise which resolves when database created, rejects on any error
 */
const createDatabase = (conn, dbName) => {};

/**
 * Creates a table in the databse.
 * @param  {Object} conn Database connection
 * @param  {String} dbName The name of the database where the table is being created
 * @param  {String} tableName Name of the new table
 * @return {Promise} A promise which resolves when the table is created, rejects on any error
 */
const createTable = (conn, dbName, tableName) => {};

/**
 * Inserts data to the table. Checks if the dataArray argument is a valid array and its content is not empty.
 * Iterates over the dataArray and creates insert promises which are being collected.
 * Returns one promise which is fullyfied when all of the inserts are successful.
 * @param  {Object} conn Database connection
 * @param  {String} dbName Database name
 * @param  {String} tableName Table name, where you insert data
 * @param  {Array} dataArray Array with Objects containing data to be inserted
 * @return {Promise} Promise which resolves when inserts are done.
 */
const insertData = (conn, dbName, tableName, dataArray) => {};

/**
 * Get all data from a table according to a filter object.
 * @param  {Object} conn Database connection
 * @param  {String} dbName Database name
 * @param  {String} tableName Table name
 * @param  {Object} filters Object of containing the filter (ie. {speaker_id: 10}, check: toArray())
 * @return {Promise} Promise which resolves with the filtered data.
 */
const getByFilters = (conn, dbName, tableName, filters) => {};

/**
 * Get all the data from a table.
 * @param  {Object} conn Database connection
 * @param  {String} dbName Database name
 * @param  {String} tableName Table name
 * @return {Promise} Promise which resolves with the data.
 */
const getAll = (conn, dbName, tableName) => {};

/**
 * Deletes all the content from tables.
 * Iterates over the tables and creates delete promises which are being collected.
 * Returns one promise which is fullyfied when all of the deletes are successful.
 * @param  {Object} conn Database connection
 * @param  {String} dbName Database name
 * @param  {Array} tables Array containing tables (strings), which you want to wipe (ie: ["speakers", "talks"])
 * @return {Promise} Promise which resolves when deletes are done.
 */
const wipeTables = (conn, dbName, tables) => {};

export {
  connectToDB,
  createDatabase,
  createTable,
  insertData,
  wipeTables,
  getAll,
  getByFilters
};
