## GraphQL Workshop

### Task 4
You are almost there, you've done great so far. What you have to do is the following. It is reasonable expectation to have parameters in any query. When you run speakers query you must be able to search for a specific speaker by a name or an id. Here is an example:

```bash
{
  speakers(name: "Gabriel Mičko") {
    position
  }
}
```
or
```bash
{
  speakers(id: "cfc5f8de-b034-4c61-b885-1db70d319e1c") {
    position
  }
}
```

- You will need to define the parameters in the Query type (src/types/index.js).
- Make sure to pass the arguments in "src/resolvers/index.js";

#### Hints:
- You cool without that. 🆒

#### Running the GraphQL server:
```bash
yarn run graphql
```
Please test the functionality by running the server.

#### Testing:
When you are done, please run this command:

```bash
yarn run test
```

Or if you want to run the test on every change run this command:

```bash
yarn run test:watch
```

##### Good luck!
