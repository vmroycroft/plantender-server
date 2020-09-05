const { Plant } = require('../models');

module.exports = {
	Query: {
		plants: async (_, args) => await Plant.find(args).exec()
	},
	Mutation: {
		addPlant: async (_, args) => {
			try {
				let response = await Plant.create(args);
				return {
					success: true,
					message: null,
					plant: response
				};
			} catch (e) {
				return {
					success: false,
					message: e.message,
					plant: null
				};
			}
		}
	}
};
