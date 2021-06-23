const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app_ = require("./app");

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Route Middlewares
const jobsRoutes = require("./routes/jobs");
app.use("/job-board/api/jobs", jobsRoutes);

// const companiesRoutes = require("./routes/companies");
// app.use("/job-board/api/companies", companiesRoutes);

// const candidatesRoutes = require("./routes/candidates");
// app.use("/job-board/api/candidates", candidatesRoutes);

app.use("/job-board/api", (req, res) => {
  res.json({ message: "Welcome to our Recruitment Platform API" });
});

app.use("/job-board", (req, res) => {
  res.sendFile();
});

// DB Connection
const db = require("./db");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
