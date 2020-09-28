import React from "react";
import"./style.css";

const Form = () => (
    <form className="container__form ">
        <input className="container__input " type="text" placeholder="Co jest do zrobienia ?" />
        <button className="container__button ">Dodaj zadanie</button>
    </form>
)

export default Form;