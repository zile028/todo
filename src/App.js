import React, { useState } from "react";

function App() {
  const [task, setTask] = useState([
    {
      task: "Uciti React",
      done: false,
    },
    {
      task: "Uciti NodeJs",
      done: true,
    },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    setTask([...task, { task: newTask, done: false }]);
    setNewTask("");
  };

  const removeTask = (el) => {
    let taskCopy = [...task];
    taskCopy.splice(el, 1);
    setTask(taskCopy);
  };

  const changeStatus = (el) => {
    let taskCopy = [...task];
    taskCopy[el].done = !taskCopy[el].done;
    setTask(taskCopy);
  };

  return (
    <main>
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
            <button className="btn btn-warning col-1" onClick={addTask}>
              Add task
            </button>
          </div>
        </div>
      </header>
      <section className="container">
        {task.map((el, index) => {
          return (
            <div className="card mb-3" key={index}>
              <div className="card-header">{el.task}</div>
              <div className="card-body">
                {el.done ? "Urađen" : "Nije urađen"}
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    removeTask(index);
                  }}
                >
                  Remove
                </button>
                {el.done ? (
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      changeStatus(index);
                    }}
                  >
                    Otkaži
                  </button>
                ) : (
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      changeStatus(index);
                    }}
                  >
                    Urađeno
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default App;
