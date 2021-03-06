const mongoose = require('mongoose');
const { Schema } = mongoose;

const plantSchema = new Schema({
	name: String,
	watered: [String],
	fertilized: [String],
	fertilizeFrequency: Number,
	group: String
});

const Plant = mongoose.model('plant', plantSchema);

module.exports = Plant;
