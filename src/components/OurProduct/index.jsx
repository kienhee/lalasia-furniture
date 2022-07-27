import React from "react";
import Heading from "../Heading";
import "./ourProduct.scss";
export default function OurProduct() {
    return (
        <>
            <section className="our-product">
                <div className="container">
                    <div className="our-product__container">
                        <div className="col-50">
                            <Heading
                                headingSmall="Our Product"
                                headingLarge="Crafted by talented and high quality material"
                                align="left"
                            />
                            <p className="paragraph-color our-product__paragraph">
                                Pellentesque etiam blandit in tincidunt at
                                donec. Eget ipsum dignissim placerat nisi,
                                adipiscing mauris non purus parturient.
                            </p>

                            <a
                                href="/"
                                className="btn btn-primary our-product__btn"
                            >
                                learn more
                            </a>
                            <img
                                src={require("../../assets/images/unsplash_mpN7xjKQ_Ns.png")}
                                alt="Product "
                            />
                        </div>
                        <div className="col-50">
                            <div className="our-product__count">
                                <div className="our-product__count-item">
                                    <h3>20+</h3>
                                    <p className="paragraph-color">
                                        Years Experience
                                    </p>
                                </div>
                                <div className="our-product__count-item">
                                    <h3>483</h3>
                                    <p className="paragraph-color">
                                        Happy Client
                                    </p>
                                </div>
                                <div className="our-product__count-item">
                                    <h3>150+</h3>
                                    <p className="paragraph-color">
                                        Project Finished
                                    </p>
                                </div>
                            </div>
                            <img
                                src={require("../../assets/images/unsplash_376KN_ISplE.png")}
                                alt="Product"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
