const express = require("express");
const workoutRoutes = require("./routes/workouts");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require("mongoose");

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  // App only listens when connected to db
  .then(() => {
    console.log('connected to db');
    app.listen(port, () => {
      console.log("listening on port:", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
