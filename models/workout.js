const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises: [
    {
      type: {
        type: String
      },
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
    }
  ]
});

WorkoutSchema.virtual('totalDuration').get(function() {
    let total = 0;
    for (let i = 0; i < this.exercises.length; i++) {

        total = this.exercises[i].duration + total;
        
    
    }
    return total;
  });
  WorkoutSchema.set('toJSON', {virtuals: true})

const Workout = mongoose.model("workout", WorkoutSchema);
module.exports = Workout;
