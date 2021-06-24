let fetch = require("node-fetch");

const baseURL = "https://bmuday.com/job-board/api/jobs";

const fetchGithub = async () => {
  fetch(`${baseURL}`)
    .then((response) => response.json())
    .then((jobs) => {
      console.log(jobs);
      console.log(`${jobs.length} jobs found.`);
    })
    .catch((err) => console.log(err));
};

fetchGithub();

module.exports = fetchGithub;
