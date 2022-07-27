import React from "react";
import Heading from "../Heading";

export default function Testimonials() {
    return (
        <>
            <section className="testimonials">
                <Heading
                    headingSmall="Testimonials"
                    headingLarge="What our customer say"
                    align="center"
                />
                <p className="paragraph-color description-center ">
                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                    dignissim placerat nisi, adipiscing mauris non purus
                    parturient.
                </p>
            </section>
        </>
    );
}
