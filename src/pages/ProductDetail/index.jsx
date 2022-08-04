import React from "react";
import ProductDetailInfo from "../../components/ProductDetailInfo";
import ProductSlick from "../../components/ProductSlick";
import Heading from "../../components/Heading";
import "./productDetails.scss";
export default function index() {
    return (
        <>
            <section className="product-detail">
                <div className="container">
                    <ProductDetailInfo />
                    <Heading headingLarge="Related Items" align="left" />
                    <ProductSlick />
                </div>
            </section>
        </>
    );
}
