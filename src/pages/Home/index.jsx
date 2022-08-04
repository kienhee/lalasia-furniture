import React from "react";
import Benefits from "../../components/Benefits";
import Hero from "../../components/Hero";
import OurProduct from "../../components/OurProduct";
import ProductSlick from "../../components/ProductSlick";
import Testimonials from "../../components/Testimonials";
import Heading from "../../components/Heading";
export default function Home() {
    return (
        <>
            <Hero />
            <Benefits />
            <Heading
                headingSmall="Product"
                headingLarge="Our popular product"
                align="center"
            />
            <p className="paragraph-color description-center ">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non purus parturient.
            </p>
            <ProductSlick />
            <OurProduct />
            <Testimonials />
        </>
    );
}
