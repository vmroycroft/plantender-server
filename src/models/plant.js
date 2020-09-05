const mongoose = require('mongoose');
const { Schema } = mongoose;

const plantSchema = new Schema({
	name: String,
	lastWatered: String,
});

const Plant = mongoose.model('plant', plantSchema);

module.exports = Plant;
