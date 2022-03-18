import React, { useState } from "react";
import AllTask from "./component/AllTask";
import Header from "./component/Header";
export const addTaskContext = React.createContext();
export const taskContext = React.createContext();
export const actionContext = React.createContext();

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

  const addTask = (arg) => {
    setTask([...task, { task: arg, done: false }]);
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

  const taskAction = {
    add: addTask,
    remove: removeTask,
    change: changeStatus,
  };

  return (
    <main>
      <addTaskContext.Provider value={addTask}>
        <Header />
      </addTaskContext.Provider>

      <taskContext.Provider value={task}>
        <actionContext.Provider value={taskAction}>
          <AllTask />
        </actionContext.Provider>
      </taskContext.Provider>

      {/* {task.map((el, index) => {
            return (
              <div className="col-4">
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
              </div>
            );
          })} */}
    </main>
  );
}

export default App;
