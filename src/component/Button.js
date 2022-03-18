import React from "react";

function Button({ btn }) {
  const removeTask = (el) => {
    console.log(el);
  };
  const changeStatus = (params) => {};

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
        btnType[btn].action(5);
      }}
    >
      {btnType[btn].title}
    </button>
  );
}

export default Button;
