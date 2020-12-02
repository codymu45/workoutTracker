const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "What kind of workout?"
  },
  weight: {
    type: Number,
    required: "Enter weight amount"
  },
  sets: {
    type: Number,
    required: "Enter amount of sets"
  },
  reps: {
    type: Number,
    required: "Enter amount of reps"
  },
  duration: {
    type: Number,
    required: "Enter amount of time this excercise took"
  }
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;