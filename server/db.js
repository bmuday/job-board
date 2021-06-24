const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const { USERNAME, PASSWORD, DATABASE } = process.env;

mongoose
  .connect(
    `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.nnbxv.mongodb.net/${DATABASE}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
