const express = require("express");
const router = express.Router();
const {createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout} = require('../controllers/workoutController')

router.get("/", getWorkouts);

router.get("/:id", getWorkout);


//POST
router.post('/', createWorkout)

//DELETE
router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

module.exports = router;
