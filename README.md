## GraphQL Workshop

### Task 3
In this task you will need to extend the speakers query. When you run the following query it should also query for the talks for each speaker.

```javascript
{
  speakers {
    talks
  }
}
```

- You will need to manipulate around "src/types/speakers.js". Make sure to check http://dev.apollodata.com/tools/graphql-tools/generate-schema.html (Author's posts).
- Check your resolver file "src/resolvers/index.js". Add the specific talks resolver for Speakers type. You can use the getTalksBySpeakerId you wrote as a part of the first task. It will help you to find the talks for the specific speaker.

#### Hints:
- Use the graphql-tools website for getting more help.
- Your resolver for the Speakers will have a object attribute containing the speaker.
- Pay attention that some speakers don't have any talks.

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
