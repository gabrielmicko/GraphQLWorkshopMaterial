import r from 'rethinkdb';
import speakers from '../db/speakers.json';
import talks from '../db/talks.json';

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

const createTable = (conn, tableName) => {
  return new Promise(resolve => {
    try {
      r.tableCreate(tableName).run(conn, err => {
        err ? resolve(err) : resolve();
      });
    } catch (e) {
      console.log(e);
    }
  });
};

const seedSpeakers = (conn, tableName) => {
  let insertPromises = [];
  speakers.forEach(speaker => {
    let insertPromise = new Promise((resolve, reject) => {
      r
        .db('jsdays')
        .table(tableName)
        .insert(speaker)
        .run(conn, (err, result) => {
          if (!err && result.inserted === 1) {
            resolve(result);
          } else {
            reject(err);
          }
        });
    });
    insertPromises.push(insertPromise);
  });
  return Promise.all(insertPromises);
};

const findSpeakersByName = (conn, tableName, name) => {
  return new Promise((resolve, reject) => {
    try {
      r.table(tableName).filter({ name: name }).run(conn, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.toArray());
        }
      });
    } catch (e) {
      console.log(e);
    }
  });
};

const seedTalks = (conn, talksTableName, speakersTableName) => {
  let insertPromises = [];
  talks.forEach(talk => {
    let talkInsertPromise = new Promise((resolve, reject) => {
      findSpeakersByName(conn, speakersTableName, talk.name).then(speakers => {
        if (speakers.length) {
          talk['speaker_id'] = speakers[0].id;
          r.table(talksTableName).insert(talk).run(conn, (err, result) => {
            if (!err && result.inserted === 1) {
              resolve(result);
            } else {
              reject(err);
            }
          });
        } else {
          resolve();
        }
      }, resolve);
    });
    insertPromises.push(talkInsertPromise);
  });
  return Promise.all(insertPromises);
};

const wipeTables = (conn, tables) => {
  let deletePromises = [];
  tables.forEach(table => {
    deletePromises.push(r.table(table).delete().run(conn));
  });
  return Promise.all(deletePromises);
};

export {
  connectToDB,
  createDatabase,
  createTable,
  seedSpeakers,
  seedTalks,
  wipeTables,
};
