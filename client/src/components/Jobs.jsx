import React from "react";

import Job from "./Job";

const Jobs = ({ jobs }) => {
  return (
    <>
      <div className="jobs">
        {jobs.map((job) => (
          <Job job={job} />
        ))}
      </div>
    </>
  );
};

export default Jobs;
