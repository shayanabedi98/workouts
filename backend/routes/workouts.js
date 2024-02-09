const express = require("express");
const router = express.Router();
const {createWorkout, getWorkout, getWorkouts} = require('../controllers/workoutController')

router.get("/", getWorkouts);

router.get("/:id", getWorkout);


//POST
router.post('/', createWorkout)


//DELETE
router.delete("/:id", (req, res) => {
  res.json({ message: "delete a workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ message: "update a workout" });
});

module.exports = router;
