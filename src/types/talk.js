const Talk = /* GraphQL */ `
  type Talk {
    id: ID!,
    speaker_id: ID!
    lang: String!
    name: String
    theme: String
    title: String
  }
`;

export default Talk;