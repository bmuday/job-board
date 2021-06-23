let fetch = require("node-fetch");

const URL = "localhost:5000/api/jobs";

module.exports = async function fetchGithub() {
  fetch(URL)
    .then((response) => response.json())
    .then((jobs) => console.log(jobs.length))
    .catch((err) => console.log(err));
  };

module.exports();
