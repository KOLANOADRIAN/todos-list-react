import React from "react";
import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <div className="section__header">
            <h2 className="container__caption--bottom">{title}</h2>
            {extraHeaderContent}
        </div>
        {body}
    </section>
);

export default Section;
