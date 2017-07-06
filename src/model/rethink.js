import r from 'rethinkdb';

const connectToDB = () => {
  return r.connect({
    host: 'localhost',
    port: 28015,
    user: 'admin'
  });
};

const createDatabase = (conn, dbName) => {
  return new Promise(resolve => {
    r.dbCreate(dbName).run(conn, err => {
      err ? resolve(err) : resolve();
    });
  });
};

const createTable = (conn, dbName, tableName) => {
  return new Promise(resolve => {
    r.db(dbName).tableCreate(tableName).run(conn, err => {
      err ? resolve(err) : resolve();
    });
  });
};

const insertData = (conn, dbName, tableName, dataArray) => {
  let insertPromisesArray = [];
  if (dataArray && Array.isArray(dataArray)) {
    dataArray.forEach(data => {
      let insertPromise = new Promise((resolve, reject) => {
        r.db(dbName).table(tableName).insert(data).run(conn, (err, result) => {
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

const wipeTables = (conn, dbName, tables) => {
  let deletePromises = [];
  tables.forEach(table => {
    deletePromises.push(r.db(dbName).table(table).delete().run(conn));
  });
  return Promise.all(deletePromises);
};

const getByFilters = (conn, dbName, tableName, filters) => {
  return new Promise((resolve, reject) => {
    r.db(dbName).table(tableName).filter(filters).run(conn, (err, result) => {
      !err ? resolve(result.toArray()) : reject(err);
    });
  });
};

const getAll = (conn, dbName, tableName) => {
  return new Promise((resolve, reject) => {
    r.db(dbName).table(tableName).getAll().run(conn, (err, result) => {
      !err ? resolve(result.toArray()) : reject(err);
    });
  });
};

const getByName = (conn, dbName, tableName, id) => {};

export { connectToDB, createDatabase, createTable, insertData, wipeTables };
