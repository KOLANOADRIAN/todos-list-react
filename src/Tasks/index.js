import React from "react";
import "./style.css";

const Tasks = (props) => (
    <ul className="container__list js-tasks">
        {props.tasks.map(task => (
            <li
                className={`container__listIteam ${task.done && props.hideDoneTasks ? "tasks__item--hidden" : ""}`}
            >
                <button className="tasks__buttonToggle tasks__buttonToggle--done ">
                    {task.done ? " ✔ " : ""}
                </button>
                <span className={`"tasks__content${ task.done ? " tasks__content--done" : " "}"`}>  
                {task.content} 
                </span>
                <button className="tasks__buttonRemove tasks__buttonRemove--done js-remove">
                🗑
               </button>
            </li>
))}
    </ul >
);

export default Tasks;
