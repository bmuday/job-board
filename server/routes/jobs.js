const router = require("express").Router();
const {
  createJob,
  getJob,
  updateJob,
  deleteJob,
  getAllJobs,
  deleteAllJobs,
} = require("../controllers/jobs");

// CREATE JOB
router.post("/", createJob);

// GET ONE JOB(ID)
router.get("/:id", getJob);

// UPDATE ONE JOB(ID)
router.put("/:id", updateJob);

// DELETE ONE JOB(ID)
router.delete("/:id", deleteJob);

// GET ALL JOBS
router.get("/", getAllJobs);

// DELETE ALL JOBS
router.delete("/", deleteAllJobs);

module.exports = router;
