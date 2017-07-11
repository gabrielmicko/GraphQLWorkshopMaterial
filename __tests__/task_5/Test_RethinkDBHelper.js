import {
  connectToDB,
  createDatabase,
  createTable,
  insertData,
  wipeTables,
  getAll,
  getByFilters
} from '../../src/rethink/helper.js';
import speakers from '../../src/db/speakers.json';
import r from 'rethinkdb';
const testDBName = 'jest_test_db_temporary';
const testTableName = 'jest_test_table_temporary';
const testSecondTableName = 'jest_test_table_second_temporary';
const testData = speakers;
let conn = false;

expect.extend({
  inArray(received, argument) {
    if (received.indexOf(argument) !== -1) {
      return {
        message: 'OK',
        pass: true
      };
    } else {
      return {
        message:
          'inArray failed, Argument not found in ' +
          received.join(',') +
          ' array.',
        pass: false
      };
    }
  }
});

beforeAll(() => {
  return connectToDB().then(connection => {
    conn = connection;
  });
});

afterAll(() => {
  return r.dbDrop(testDBName).run(conn).then(() => {
    conn.close();
  });
});

test('Creating a database (createDatabase).', () => {
  expect.assertions(1);
  return new Promise(resolve => {
    createDatabase(conn, testDBName).then(() => {
      r.dbList().run(conn).then(list => {
        resolve(expect(list).inArray(testDBName));
      });
    });
  });
});

test('Creating a table (createTable).', () => {
  expect.assertions(1);
  return new Promise(resolve => {
    createTable(conn, testDBName, testTableName).then(() => {
      r.db(testDBName).tableList().run(conn).then(list => {
        resolve(expect(list).inArray(testTableName));
      });
    });
  });
});

test('Inserting data to the db and reading it back (insertData).', () => {
  expect.assertions(1);
  return new Promise(resolve => {
    insertData(conn, testDBName, testTableName, testData).then(() => {
      r.db(testDBName).table(testTableName).run(conn).then(data => {
        data.toArray().then(data => {
          resolve(expect(data).toMatchSnapshot());
        });
      });
    });
  });
});

test('Reading data by a filter (getByFilters).', () => {
  expect.assertions(1);
  return new Promise(resolve => {
    getByFilters(conn, testDBName, testTableName, {
      id: 'cfc5f8de-b034-4c61-b885-1db70d319e1c'
    }).then(result => {
      resolve(expect(result).toMatchSnapshot());
    });
  });
});

test('Reading all the data (getAll).', () => {
  expect.assertions(1);
  return new Promise(resolve => {
    getAll(conn, testDBName, testTableName).then(result => {
      resolve(expect(result).toMatchSnapshot());
    });
  });
});

test('Wipe the content out from the table. (wipeTables).', () => {
  expect.assertions(1);
  return new Promise((resolve, reject) => {
    wipeTables(conn, testDBName, [testTableName]).then(() => {
      r.db(testDBName).table(testTableName).run(conn).then(data => {
        data.toArray().then(data => {
          resolve(expect(data).toMatchSnapshot());
        });
      });
    }, reject);
  });
});
