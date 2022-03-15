import React from "react";

function Button() {
  const changeStatus = (params) => {};
  return (
    <button
      className="btn btn-success"
      onClick={() => {
        changeStatus(1);
      }}
    >
      Otkaži
    </button>
  );
}

export default Button;
