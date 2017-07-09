import { graphql } from 'graphql';
import schema from '../../src/schema';

test('GraphQL server should return all the talks.', () => {
  expect.assertions(1);
  const query = /* GraphQL */ `
    {
      talks {
        id,
        speaker_id,
        lang,
        name,
        theme,
        title
      }
    }
  `;
  return graphql(schema, query).then(result => {
    expect(result).toMatchSnapshot();
  });
});

test('GraphQL server should return all the speakers.', () => {
  expect.assertions(1);
  const query = /* GraphQL */ `
    {
      talks {
        id,
        bio,
        facebook,
        github,
        linkedin,
        twitter,
        position,
        name,
        photo
      }
    }
  `;
  return graphql(schema, query).then(result => {
    expect(result).toMatchSnapshot();
  });
});
