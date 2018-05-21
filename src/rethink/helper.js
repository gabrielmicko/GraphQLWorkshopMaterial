import r from 'rethinkdb';
import { RETHINK } from '../config/config.json';

/**
 * Creates a connection with the database.
 * The connection details are defined in this function.
 * @return {Promise<Object: conn>} Returns a Promise with a connnection
 */
const connectToDB = () => {
  return r.connect({
    host: RETHINK.HOST,
    port: RETHINK.PORT,
    user: RETHINK.USER
  });
};

/**
 * Creates a database according to the given argument.
 * @param  {Object} conn Database connection
 * @param  {String} dbName Database name
 * @return {Promise} A promise which resolves when database created, rejects on any error
 */
const createDatabase = (conn, dbName) => {
  return new Promise(resolve => {
    r.dbCreate(dbName).run(conn, err => {
      err ? resolve(err) : resolve();
    });
  });
};

/**
 * Creates a table in the databse.
 * @param  {Object} conn Database connection
 * @param  {String} dbName The name of the database where the table is being created
 * @param  {String} tableName Name of the new table
 * @return {Promise} A promise which resolves when the table is created, rejects on any error
 */
const createTable = (conn, dbName, tableName) => {
  return new Promise(resolve => {
    r
      .db(dbName)
      .tableCreate(tableName)
      .run(conn, err => {
        err ? resolve(err) : resolve();
      });
  });
};

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
const insertData = (conn, dbName, tableName, dataArray) => {
  let insertPromisesArray = [];
  if (dataArray && Array.isArray(dataArray)) {
    dataArray.forEach(data => {
      let insertPromise = new Promise((resolve, reject) => {
        r
          .db(dbName)
          .table(tableName)
          .insert(data)
          .run(conn, (err, result) => {
            if (!err && result.inserted === 1) {
              resolve(result);
            } else {
              reject(err);
            }
          });
      });
      insertPromisesArray.push(insertPromise);
    });
  }
  return Promise.all(insertPromisesArray);
};

/**
 * Get all data from a table according to a filter object.
 * @param  {Object} conn Database connection
 * @param  {String} dbName Database name
 * @param  {String} tableName Table name
 * @param  {Object} filters Object of containing the filter (ie. {speaker_id: 10}, check: toArray())
 * @return {Promise} Promise which resolves with the filtered data.
 */
const getByFilters = (conn, dbName, tableName, filters) => {
  return new Promise((resolve, reject) => {
    r
      .db(dbName)
      .table(tableName)
      .filter(filters)
      .run(conn, (err, result) => {
        !err ? resolve(result.toArray()) : reject(err);
      });
  });
};

/**
 * Get all the data from a table.
 * @param  {Object} conn Database connection
 * @param  {String} dbName Database name
 * @param  {String} tableName Table name
 * @return {Promise} Promise which resolves with the data.
 */
const getAll = (conn, dbName, tableName) => {
  return new Promise((resolve, reject) => {
    r
      .db(dbName)
      .table(tableName)
      .run(conn, (err, result) => {
        !err ? resolve(result.toArray()) : reject(err);
      });
  });
};

/**
 * Deletes all the content from tables.
 * Iterates over the tables and creates delete promises which are being collected.
 * Returns one promise which is fullyfied when all of the deletes are successful.
 * @param  {Object} conn Database connection
 * @param  {String} dbName Database name
 * @param  {Array} tables Array containing tables (strings), which you want to wipe (ie: ["speakers", "talks"])
 * @return {Promise} Promise which resolves when deletes are done.
 */
const wipeTables = (conn, dbName, tables) => {
  let deletePromises = [];
  tables.forEach(table => {
    let delPromise = new Promise(resolve => {
      r
        .db(dbName)
        .table(table)
        .delete()
        .run(conn, (conn, err) => {
          err ? resolve(err) : resolve();
        });
    });

    deletePromises.push(delPromise);
  });
  return Promise.all(deletePromises);
};

/**
 * Subscribe to any change that happens in a table.
 * Takes the callback function and calls it whenever something has changed.
 * The callback function in most of the cases should notify the PubSub system.
 * Returns one promise which is fullyfied when the subscription has been successful.
 * @param  {Object} conn Database connection
 * @param  {String} dbName Database name
 * @param  {Array} tableName Table name that you want to subscribe to.
 * @return {Promise} Promise which resolves when subscription is ready.
 */
const subscribeToTable = (conn, dbName, tableName, callbackFn) => {
  return new Promise(resolve => {
    r
      .db(dbName)
      .table(tableName)
      .changes()
      .run(conn, function(error, cursor) {
        if (error !== null) {
          reject(error);
        }
        cursor.each((e, c) => {
          if (c.new_val) {
            callbackFn(c.new_val);
          }
        });
        resolve();
      });
  });
};

export { connectToDB, createDatabase, createTable, insertData, wipeTables, getAll, getByFilters, subscribeToTable };
