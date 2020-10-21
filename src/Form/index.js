import React, {useState} from "react";
import"./style.css";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(newTaskContent.trim() === "") {
            return;
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }

    return (
        <form className="container__form " onSubmit={onFormSubmit}>
            <input 
            value={newTaskContent}
            className="container__input " 
            type="text" 
            placeholder="Co jest do zrobienia ?" 
            onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <button className="container__button ">Dodaj zadanie</button>
        </form>
    );
};

export default Form;