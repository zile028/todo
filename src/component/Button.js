import React from "react";

function Button({ btn, index, taskAction }) {
  const removeTask = (el) => {
    taskAction.remove(el);
  };
  const changeStatus = (el) => {
    taskAction.change(el);
  };
  const btnType = {
    remove: {
      class: "btn btn-danger",
      action: removeTask,
      title: "Remove",
    },
    cancle: {
      class: "btn btn-warning",
      action: changeStatus,
      title: "Otkaži",
    },
    done: {
      class: "btn btn-success",
      action: changeStatus,
      title: "Urađeno",
    },
  };

  return (
    <button
      className={btnType[btn].class}
      onClick={() => {
        btnType[btn].action(index);
      }}
    >
      {btnType[btn].title}
    </button>
  );
}

export default Button;
