const { gql } = require("apollo-server");

const schemas = gql`
  extend type Query {
    """
    Returns all plants.
    """
    plants: [Plant]
  }

  extend type Mutation {
    addPlant(name: String!): AddPlantResponse
    waterPlant(id: String!, date: String!): WaterPlantResponse
  }

  type AddPlantResponse {
    success: Boolean!
    message: String
    plant: Plant
  }

  type WaterPlantResponse {
    success: Boolean!
    message: String
    plant: Plant
  }

  type Plant {
    id: ID!
    name: String!
    lastWatered: String
  }
`;

module.exports = schemas;
