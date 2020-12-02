const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "What kind of workout?"
  },
  distance: {
    type: Number,
    required: "Enter amount of distance"
  },
  duration: {
    type: Number,
    required: "Enter amount of time"
  }
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;