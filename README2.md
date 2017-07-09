## GraphQL Workshop

### Task 2
ow you are going to create your first minimalistic GraphQL server. The goal of this task is to be able to query for speakers and talks.

- The first subtask would be to setup express to use graphqlHTTP. File is here "src/server.js". Please take a look how it is done on it's GitHub site https://github.com/graphql/express-graphql. Use the APP_PATH constant when defining the route.
- It is time to write your first schemas. You will need two of them. First is for speakers, second is for talks. You can access these files in the "src/types" directory ("speaker.js", "talk.js"). Check "src/db/speakers.json" and "src/db/talks.json" to see the structure of the data. Visit http://dev.apollodata.com/tools/graphql-tools/generate-schema.html for more information about schemas (ie: "Author").
- You need to define your main type definition where you have to attach the two previously written schemas. You can find the file here "src/types/index.js". Define the Query type with containing two queries (speakers, talks) and the schema where you define the Query. Export every type definition in an array.
- Resolvers will help you to call any function on a query. Do you remember the first model you wrote? It's time for you to use it at "src/resolvers/index.js". Define a Query in the exported object.
- Final step is to makeExecutableSchema at "src/schema.js". Pass the resolvers and the type definitions to the function.


#### Hints:
- Use the graphql-tools, express-graphql website for getting more help.
- There is a "pretty" key for GraphHTTP, you might want to use it.

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
