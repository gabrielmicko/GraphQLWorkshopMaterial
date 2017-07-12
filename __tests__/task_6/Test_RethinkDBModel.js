import { graphql } from 'graphql';
import schema from '../../src/schema';

test('GraphQL server should return all the speakers with talks.', () => {
  expect.assertions(1);
  const query = /* GraphQL */ `
    {
      speakers {
        id
        bio
        facebook
        github
        linkedin
        twitter
        position
        name
        photo,
        talks {
          id
        }
      }
    }
  `;
  return graphql(schema, query).then(result => {
    expect(result).toMatchSnapshot();
  });
});
