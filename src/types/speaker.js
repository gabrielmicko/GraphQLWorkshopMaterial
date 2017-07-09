/**
 * Speaker type defining the parameters
 */

const Speaker = /* GraphQL */ `
  type Speaker {
    id: ID
    bio: String!
    facebook: String
    github: String
    linkedin: String
    twitter: String
    position: String!
    name: String!
    photo: String!
  }
`;

export default Speaker;
