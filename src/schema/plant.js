const { gql } = require('apollo-server');

const schemas = gql`
	extend type Query {
		"""
		Returns all plants.
		"""
		plants: [Plant]
	}

	extend type Mutation {
		addPlant(
			name: String!
			date: String!
			group: String
			fertilizeFrequency: Int
		): Response

		waterPlant(id: String!, date: String!): Response

		fertilizePlant(id: String!, date: String!): Response

		undoWaterPlant(id: String!): Response

		undoFertilizePlant(id: String!): Response
	}

	type Response {
		success: Boolean!
		message: String
		plant: Plant
	}

	# type AddPlantResponse {
	# 	success: Boolean!
	# 	message: String
	# 	plant: Plant
	# }

	# type WaterPlantResponse {
	# 	success: Boolean!
	# 	message: String
	# 	plant: Plant
	# }

	# type FertilizePlantResponse {
	# 	success: Boolean!
	# 	message: String
	# 	plant: Plant
	# }
	
	# type UndoWaterPlantResponse {
	# 	success: Boolean!
	# 	message: String
	# 	plant: Plant
	# }

	# type UndoFertilizePlantResponse {
	# 	success: Boolean!
	# 	message: String
	# 	plant: Plant
	# }

	type Plant {
		id: ID!
		name: String!
		watered: [String]!
		fertilized: [String]
		fertilizeFrequency: Int
		group: String
	}
`;

module.exports = schemas;
