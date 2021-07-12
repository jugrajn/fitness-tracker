const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExampleSchema = new Schema({
    string: {
        type: String,
        trim: true,
        required: "String is Required"
      },
      date: {
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

const Example = mongoose.model("Example", ExampleSchema);

module.exports = Example;