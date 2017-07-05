import {
  connectToDB,
  createDatabase,
  createTable,
  insertData,
  wipeTables,
} from '../model/rethink';

import speakers from '../db/speakers.json';
import talks from '../db/talks.json';

console.log('Connecting to the server.');
connectToDB()
  .then(conn => {
    createDatabase(conn, 'jsdays')
      .then(createTable(conn, 'jsdays', 'speakers'))
      .then(createTable(conn, 'jsdays', 'talks'))
      .then(wipeTables(conn, 'jsdays', ['talks', 'speakers']))
      .then(insertData(conn, 'jsdays', 'speakers', speakers))
      .then(insertData(conn, 'jsdays', 'talks', talks))
      .then(() => {
        console.log('Seeding done!');
      })
      .catch(e => {
        console.log('Seeding ended with errors!');
        console.log(e);
      });
  })
  .catch(e => {
    console.log('Could not connect to the RethinkDB database');
    console.log(e);
  });
