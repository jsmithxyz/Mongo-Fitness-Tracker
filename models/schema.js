const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercise = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      duration: {
        type: Number
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      }

      
    }
  ]
});

const Exercise = mongoose.model("Exercise", exercise);

module.exports = Exercise;