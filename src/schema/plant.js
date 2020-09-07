const { gql } = require("apollo-server");

const schemas = gql`
  extend type Query {
    """
    Returns all plants.
    """
    plants: [Plant]
  }

  extend type Mutation {
    addPlant(name: String!, date: String!, group: String): AddPlantResponse
    waterPlant(id: String!, date: String!): WaterPlantResponse
    fertilizePlant(id: String!, date: String!): FertilizePlantResponse
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

  type FertilizePlantResponse {
    success: Boolean!
    message: String
    plant: Plant
  }

  type Plant {
    id: ID!
    name: String!
    lastWatered: String!
    lastFertilized: String!
    group: String!
  }
`;

module.exports = schemas;
