const { Plant } = require("../models");

module.exports = {
  Query: {
    plants: async (_) => await Plant.find(),
  },
  Mutation: {
    addPlant: async (_, { name, date, group, fertilizeFrequency }) => {
      try {
        const doc = await Plant.create({ name, group, fertilizeFrequency, lastWatered: date, lastFertilized: date });

        return {
          success: true,
          message: null,
          plant: doc,
        };
      } catch (e) {
        return {
          success: false,
          message: e.message,
          plant: null,
        };
      }
    },
    waterPlant: async (_, { id, date }) => {
      try {
        const doc = await Plant.findById(id);
        doc.lastWatered = date;
        await doc.save();

        return {
          success: true,
          message: null,
          plant: doc,
        };
      } catch (e) {
        return {
          success: false,
          message: e.message,
          plant: null,
        };
      }
    },
    fertilizePlant: async (_, { id, date }) => {
      try {
        const doc = await Plant.findById(id);
        doc.lastFertilized = date;
        await doc.save();

        return {
          success: true,
          message: null,
          plant: doc,
        };
      } catch (e) {
        return {
          success: false,
          message: e.message,
          plant: null,
        };
      }
    },
  },
};
