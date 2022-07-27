import React from "react";
import "./hero.scss";
export default function Hero() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero__content">
                        <h1>
                            Discover Furniture With High Quality Wood
                            <sup>
                                <img
                                    src={require("../../assets/images/icon-star.png")}
                                    alt="icon"
                                    className="hero__icon"
                                />
                            </sup>
                        </h1>
                        <p className="paragraph-color">
                            Pellentesque etiam blandit in tincidunt at donec.
                            Eget ipsum dignissim placerat nisi, adipiscing
                            mauris non. Purus parturient viverra nunc, tortor
                            sit laoreet. Quam tincidunt aliquam adipiscing
                            tempor.
                        </p>
                    </div>
                    <div className="hero__img">
                        <img
                            src={require("../../assets/images/hero-img.png")}
                            alt=""
                        />
                        <div className="input__search">
                            <i className="bx bx-search text-secondary"></i>
                            <input type="text" placeholder="Search property" />
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
