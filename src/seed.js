import {
  connectToDB,
  createDatabase,
  createTable,
  seedSpeakers,
  seedTalks,
  wipeTables,
} from './helper/rethink.js';

console.log('Connecting to the server.');
connectToDB()
  .then(conn => {
    createDatabase(conn, 'jsdays')
      .then(conn.use('jsdays'))
      .then(createTable(conn, 'speakers'))
      .then(createTable(conn, 'talks'))
      .then(wipeTables(conn, ['talks', 'speakers']))
      .then(seedSpeakers(conn, 'speakers'))
      .then(seedTalks(conn, 'talks', 'speakers'))
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
