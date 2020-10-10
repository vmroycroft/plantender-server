const mongoose = require("mongoose");
const { Schema } = mongoose;

const plantSchema = new Schema({
  name: String,
  lastWatered: String,
  lastFertilized: String,
  fertilizeFrequency: Number,
  group: String,
});

const Plant = mongoose.model("plant", plantSchema);

module.exports = Plant;
