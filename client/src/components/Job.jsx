import React from "react";

const Job = ({ job }) => {
  return (
    <div className="job">
      <p>{job.title}</p>
      <p>{job.company}</p>
    </div>
  );
};

export default Job;
