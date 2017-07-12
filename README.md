## GraphQL Workshop

### Task 7

Let's write your first mutation. Whenever you want to insert, update or delete from / to your database, you are suggested to write a mutation.
Say you want to write an addSpeaker mutation.

Here is how a mutation call would look like:
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

As you see you have to pass arguments which represents the data you want to insert. Besides that you have to define what do you want to receive back as a response. In this example I would like to get back the inserted speakers data.

The first thing you have to do is open "src/resolvers/index.js". Add the Mutation object with an addSpeaker key which is a function. This will be your resolver for mutation call. Use previously written function saveSpeakers from the model "src/model/db.js".
The next step is to create the mutation type addSpekers with all the necessary arguments.


#### Hints:
- RethinkDB insert will return generated_keys Array, which contains the newly added ID, it also has an inserted key which contains the number of the inserted data.
- Use the graphql-tools documentation.


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
