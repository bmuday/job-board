const Job = require("../models/Job");

createJob = (req, res, next) => {
  const jobBody = req.body;
  const job = new Job({ ...jobBody });
  job
    .save()
    .then(() => {
      res.status(201).json({
        message: "Job saved successfully!",
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};

getJob = (req, res, next) => {
  Job.findOne({
    _id: req.params.id,
  })
    .then((job) => {
      res.status(200).json(job);
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};

updateJob = (req, res, next) => {
  const job = req.body;
  Job.updateOne({ _id: req.params.id }, { ...job, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Job updated successfully!" }))
    .catch((error) => res.status(500).json({ error }));
};

deleteJob = (req, res, next) => {
  Job.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Deleted!" }))
    .catch((error) => res.status(400).json({ error }));
};

getAllJobs = (req, res, next) => {
  Job.find()
    .then((jobs) => {
      let array;
      let page = 1;
      for (let i = 0; i < jobs.length; i++) {
        for (let j = 0; j < 5; j++) {
          array[i][j] = jobs[i];
        }
        page++;
      }
      res.status(200).json(array);
      // res.status(200).json(jobs);
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};

deleteAllJobs = (req, res, next) => {
  Job.find()
    .then(() => {
      Job.deleteMany({}).then(() => {
        res.status(200).json({
          message: "Database has been cleared!",
        });
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};

module.exports = {
  createJob,
  getJob,
  updateJob,
  deleteJob,
  getAllJobs,
  deleteAllJobs,
};
