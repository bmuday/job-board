const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 5000;

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Route Middlewares
const jobsRoutes = require("./routes/jobs");
app.use("/api/jobs", jobsRoutes);

app.use("/api", (req, res) => {
  res.json({ message: "Welcome to our Jobs API" });
});

// DB Connection
const db = require("./db");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
