import React from "react";
import Button from "./Button";
import "./Task.css";

function Task({ taskInfo }) {
  let status = "Nije uradjeno";
  if (taskInfo.done) {
    status = "Uradjeno";
  }

  return (
    <div className="col-md-3">
      <div className="card mb-3">
        <div className="card-header">{taskInfo.task}</div>
        <div className="card-body">{status}</div>
        <div className="card-footer">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Task;
