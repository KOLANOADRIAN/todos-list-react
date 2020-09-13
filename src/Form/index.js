import React from "react";
import"./style.css";

const Form = () => (
    <form className="container__form js-form">
        <input className="container__input js-newTask" type="text" placeholder="Co jest do zrobienia ?" />
        <button className="container__button js-header__formButton">Dodaj zadanie</button>
    </form>
)

export default Form;