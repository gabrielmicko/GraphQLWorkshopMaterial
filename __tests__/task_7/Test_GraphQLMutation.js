import { graphql } from 'graphql';
import schema from '../../src/schema';
import { connectToDB } from '../../src/rethink/helper.js';
import r from 'rethinkdb';

const deleteJohnDoe = conn => {
  return r
    .db('jsdays')
    .table('speakers')
    .filter({ name: 'John Doe' })
    .delete()
    .run(conn);
};

afterAll(() => {
  return new Promise(resolve => {
    connectToDB().then(conn => {
      deleteJohnDoe(conn).then(() => {
        conn.close();
        resolve();
      });
    });
  });
});

test('GraphQL Mutation addSpeaker.', () => {
  expect.assertions(1);
  const query = /* GraphQL */ `
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
  `;

  return new Promise(resolve => {
    graphql(schema, query).then(result => {
      resolve(expect(result).toMatchSnapshot());
    });
  });
});
