const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
      day: {
        type: Date,
        default: Date.now
      },
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: "Please specify type of exercise."
          },
          name: {
            type: String,
            trim: true,
            required: "What is the name of this exercise?"
          },
          duration: {
            type: Number,
            required: "How long is this exercise?"
          },
          weight: {
            type: Number
          },
          reps: {
            type: Number
          },
          sets: {
            type: Number
          },
          distance: {
            type: Number
          }
        }
      ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;