import React from "react";
import "./TitleLarge.scss";
export default function TitleLarge({ title, content }) {
    return (
        <>
            <section className="title-large container">
                <h2 className="title-large__heading">{title}</h2>
                <p className="title-large__content paragraph-color">
                    {content}
                </p>
            </section>
        </>
    );
}
