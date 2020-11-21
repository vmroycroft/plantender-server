const { Plant } = require('../models');

module.exports = {
	Query: {
		plants: async (_) => await Plant.find()
	},
	Mutation: {
		addPlant: async (_, { name, date, group, fertilizeFrequency }) => {
			try {
				const doc = await Plant.create({
					name,
					group,
					fertilizeFrequency,
					watered: [date],
					fertilized: fertilizeFrequency ? [date] : []
				});

				return {
					success: true,
					message: null,
					plant: doc
				};
			} catch (e) {
				return {
					success: false,
					message: e.message,
					plant: null
				};
			}
		},

		waterPlant: async (_, { id, date }) => {
			try {
				const doc = await Plant.findById(id);
				doc.watered.unshift(date);
				await doc.save();

				return {
					success: true,
					message: null,
					plant: doc
				};
			} catch (e) {
				return {
					success: false,
					message: e.message,
					plant: null
				};
			}
		},
		
		fertilizePlant: async (_, { id, date }) => {
			try {
				const doc = await Plant.findById(id);
				doc.fertilized.unshift(date);
				await doc.save();

				return {
					success: true,
					message: null,
					plant: doc
				};
			} catch (e) {
				return {
					success: false,
					message: e.message,
					plant: null
				};
			}
		},

		undoWaterPlant: async (_, { id }) => {
			try {
				const doc = await Plant.findById(id);
				doc.watered.shift();
				await doc.save();

				return {
					success: true,
					message: null,
					plant: doc
				};
			} catch (e) {
				return {
					success: false,
					message: e.message,
					plant: null
				};
			}
		},

		undoFertilizePlant: async (_, { id }) => {
			try {
				const doc = await Plant.findById(id);
				doc.fertilized.shift();
				await doc.save();

				return {
					success: true,
					message: null,
					plant: doc
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
