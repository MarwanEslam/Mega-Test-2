const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type FormRequest {
    id: ID!
    country: String!
    location: String!
    requestType: String!
    message: String!
    email: String!
    createdAt: String!
  }

  type Query {
    getFormRequests: [FormRequest]
  }

  type Mutation {
    submitForm(
      country: String!
      location: String!
      requestType: String!
      message: String!
      email: String!
    ): FormRequest
  }
`;

module.exports = typeDefs;
