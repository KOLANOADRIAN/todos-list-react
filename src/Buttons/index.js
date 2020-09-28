import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone }) => {
  if (tasks.length === 0) {
    return null;
  }
  return (
    <div className="bottom__buttons js-bottom__buttons">
      <button className="buttons__button js-togglehideDone">
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="buttons__button"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );
};

export default Buttons;
