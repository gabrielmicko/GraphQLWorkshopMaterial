import r from 'rethinkdb';

const connectToDB = () => {
  return r.connect({
    host: 'localhost',
    port: 28015,
    user: 'admin',
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
    try {
      r.db(dbName).tableCreate(tableName).run(conn, err => {
        err ? resolve(err) : resolve();
      });
    } catch (e) {
      console.log(e);
    }
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

const getTalkBySpeakerId = () => {
  
};

const getSpeakerByName = () => {
  
};

export { connectToDB, createDatabase, createTable, insertData, wipeTables };
