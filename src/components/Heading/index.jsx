import React from "react";
import "./heading.scss";
export default function Heading({ headingSmall, headingLarge, align }) {
    return (
        <>
            <div className={`heading ${align}`}>
                <p className="heading-small color-secondary">{headingSmall}</p>
                <h2 className={`heading-large  ${align}`}>{headingLarge}</h2>
            </div>
        </>
    );
}
