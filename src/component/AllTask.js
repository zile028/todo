import React, { useContext } from "react";
import { actionContext, taskContext } from "../App";
import Task from "./Task";

function AllTask() {
  const tasks = useContext(taskContext);
  const taskAction = useContext(actionContext);

  const allTask = tasks.map((val, index) => {
    return (
      <Task taskInfo={val} index={index} key={index} action={taskAction} />
    );
  });

  return (
    <section className="container">
      <div className="row">{allTask}</div>
    </section>
  );
}

export default AllTask;
