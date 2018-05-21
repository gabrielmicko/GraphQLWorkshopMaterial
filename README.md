## GraphQL Workshop

### Experiment 8

This is experiment for showcasing GraphQL subscriptions. You will need to configure your server first. 
Once it is done run the server and open up graphiql.

#### Setup config, install dependencies & run the server
```bash
cp ./src/config/config.example.json ./src/config/config.json 
```

```bash
yarn install
yarn run graphql
open localhost:3000/graphiql
```

#### Copy the subscription call into graphiql

```javascript
subscription newSpeaker {
    newSpeaker {
      id,
      bio,
      name,
      linkedin,
      name,
      bio,
      facebook,
      github,
      twitter,
      linkedin,
      position,
      photo,
      talks {
        id
      }
    }
  }
```

You will see a text like this: "Your subscription data will appear here after server publication!".
Now open up another graphiql tab and run the mutation of addSpeaker.

#### Here is the mutation:
```javascript
mutation addSpeaker {
  addSpeaker(
    name: "John Doe",
    bio: "John Doe is a test user.",
    facebook: "fb.com/john.doe",
    github: "github.com/john.doe",
    twitter: "github.com/john.doe",
    linkedin: "linkedin.com/john.doe",
    position: "Beeing a test everywhere.",
    photo: "/john.doe.png") {
      name,
      bio,
      facebook,
      github,
      twitter,
      linkedin,
      position,
      photo
    }
}
```
If you done everything correctly on the first tab, where you subscription is, the new speaker should show up. Hurray!

#### Hints:
- You will need to install the new dependencies.
- This will require several apollo packages like "apollo-server-express" & "subscriptions-transport-ws".
- Feel free to open issue if you find something wrong in the implementation.


#### Running the GraphQL server:
```bash
yarn run graphql
```

#### Testing:
When you are done, please run this command:

```bash
yarn run test
```

Or if you want to run the test on every change run this command:

```bash
yarn run test:watch
```

#### Seed:
```bash
yarn run seed
```

##### Good luck!
