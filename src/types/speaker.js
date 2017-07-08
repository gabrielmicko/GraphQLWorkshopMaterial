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
    talks: [Talk]!
  }
`;

export default Speaker;
