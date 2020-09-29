import React from "react";
import "./style.css";

const Tasks = ({tasks, hideDone, removeTask, toggleTaskDone}) => (
  <ul className="container__list">
    {tasks.map(task => (
      <li
        className={`container__listIteam ${
          task.done && hideDone ? "tasks__item--hidden" : ""
        }`}
      >
        <button 
        className="tasks__buttonToggle tasks__buttonToggle--done "
        onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? " ✔ " : ""}
        </button>
        <span
          className={`"tasks__content${
            task.done ? " tasks__content--done" : " "
          }"`}
        >
          {task.id} - {task.content} 
        </span>
        <button 
        className="tasks__buttonRemove tasks__buttonRemove--done"
        onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
