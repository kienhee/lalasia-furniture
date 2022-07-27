import React from "react";
import Benefits from "../../components/Benefits";
import Hero from "../../components/Hero";
import OurProduct from "../../components/OurProduct";
import ProductSlick from "../../components/ProductSlick";
import Testimonials from "../../components/Testimonials";
export default function Home() {
    return (
        <>
            <Hero />
            <Benefits />
            <ProductSlick />
            <OurProduct />
            <Testimonials />
        </>
    );
}
