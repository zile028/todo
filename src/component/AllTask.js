import React, { useContext } from "react";
import { taskContext } from "../App";
import Task from "./Task";

function AllTask() {
  const tasks = useContext(taskContext);

  const allTask = tasks.map((val, index) => {
    return <Task taskInfo={val} key={index} />;
  });

  return (
    <section className="container">
      <div className="row">{allTask}</div>
    </section>
  );
}

export default AllTask;
