import React, { useContext, useState } from "react";
import { addTaskContext } from "../App";

function Header() {
  const addTask = useContext(addTaskContext);
  const [newTask, setNewTask] = useState("");
  const add = () => {
    if (newTask !== "") {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <header className="jumbotron text-center">
      <h1>My Task</h1>
      <div className="container">
        <div className="row">
          <input
            type="text"
            className="col-5 offset-3"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
          />
          <button className="btn btn-warning col-1" onClick={add}>
            Add task
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
