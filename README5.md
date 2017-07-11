## GraphQL Workshop

### Task 5

#### Install RethinkDB 🔍
```bash
open https://www.rethinkdb.com/docs/install/
```

All righty! 🚀 RethinkDB is a cool database. The new approach now is to replace the .json files with an existing database. This will be the first step on this journey. Your task will be to create a helper file which will handle the database connection, insert, delete, get etc. The path for it is here "src/rethink/helper.js". Please do it according to the given documentation. Feel free to surf the documentation waves: https://rethinkdb.com/api/javascript/ 🔍.

#### Your config will probably look like
The port for the GraphQL UI is: http://localhost:8080.
```javascript
{
  host: 'localhost',
  port: 28015,
  user: 'admin'
}
```

#### Hints:
- This task is a bit tricky. Feel free to ask. 🙋
- Use the tests to test your functions.
- Once your functions are passing the tests you can ran the seed command. It will create the tables for you. It also pushes all the necessary data to the tables, so you don't have to do it manually (speakers, talks).


#### Testing:
When you are done, please run this command:

```bash
yarn run test
```

Or if you want to run the test on every change run this command:

```bash
yarn run test:watch
```

#### If tests are OK, you can start Seeding:
```bash
yarn run seed
```

##### Good luck!
