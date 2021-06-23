import React from "react";
import Jobs from "./components/Jobs";
import data from "./data.json";

const App = () => {
  return (
    <>
      <h1 id="title">Junior Software Jobs</h1>
      <Jobs jobs={data} />
    </>
  );
};

export default App;
