const db = require("../models");

module.exports = function(app) {

    app.get("/api/workouts", (req, res) => 
    {
        db.Workout.find({}, (error, data) => 
    {
    if (error) {
      res.send(error)
    } 
    else {
      res.json(data)
    }
  });
});


}




