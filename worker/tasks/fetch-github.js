let fetch = require("node-fetch");

const baseURL = "https://bmuday.com/job-board/api/jobs";

async function fetchGithub() {
  let resultCount = 1;
  let onPage = 0;
  const allJobs = [];

  while (resultCount > 0) {
    fetch(`${baseURL}?page=${onPage}`)
      .then((response) => response.json())
      .then((jobs) => {
        allJobs.push(jobs);
        console.log(jobs);
        console.log(`${jobs.length} jobs found.`);
        onPage++;
      })
      .catch((err) => console.log(err));
  }
  console.log(allJobs.length);
}

fetchGithub();

module.exports = fetchGithub;
