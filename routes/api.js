const db = require("../models");
const mongoose = require("mongoose")

module.exports = function(app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.send(error);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(req.params.id) },
      {
        $push: {
          exercises: req.body
        }
      },
      { new: true }
    )
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.send(error);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
      db.Workout.find({}).sort({day: "desc"}).limit(7)
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.send(error);
      });

  });

  app.delete("/api/workouts", (req, res) => {
    db.Workout.deleteOne(
      {
        _id: mongoose.Types.ObjectID(req.body.id)
      },
      (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
  });
};
