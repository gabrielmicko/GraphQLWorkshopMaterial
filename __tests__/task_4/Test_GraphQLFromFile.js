import { graphql } from 'graphql';
import schema from '../../src/schema';

test('GraphQL server should return one speaker by ID.', () => {
  expect.assertions(1);
  const query = /* GraphQL */ `
    {
      speakers(id: "cfc5f8de-b034-4c61-b885-1db70d319e1c") {
        id,
        bio,
        facebook,
        github,
        linkedin,
        twitter,
        position,
        name,
        photo,
        talks {
          id,
          speaker_id,
          lang,
          name,
          theme,
          title
        }
      }
    }
  `;
  return graphql(schema, query).then(result => {
    expect(result).toMatchSnapshot();
  });
});

test('GraphQL server should return one speaker by name.', () => {
  expect.assertions(1);
  const query = /* GraphQL */ `
    {
      speakers(name: "Gabriel Mičko") {
        id,
        bio,
        facebook,
        github,
        linkedin,
        twitter,
        position,
        name,
        photo,
        talks {
          id,
          speaker_id,
          lang,
          name,
          theme,
          title
        }
      }
    }
  `;
  return graphql(schema, query).then(result => {
    expect(result).toMatchSnapshot();
  });
});
