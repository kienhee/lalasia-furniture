import React from "react";
import Slider from "react-slick";

import "./productSlick.scss";
import Heading from "../Heading";
import img1 from "../../assets/images/product/icon1.png";
import img2 from "../../assets/images/product/icon2.png";
import img4 from "../../assets/images/product/icon4.png";
import img5 from "../../assets/images/product/icon5.png";
export default function ProductSlick() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    const fakeProductItems = [
        {
            id: 1,
            image: img5,
            category: "Living Room",
            name: "Wooden Bookshelf",
            description: "Combination of wood and wool",
            price: "62.23",
        },
        {
            id: 2,
            image: img1,
            category: "Chair",
            name: "White Aesthetic Chair",
            description: "Combination of wood and wool",
            price: "63.47",
        },
        {
            id: 3,
            image: img2,
            category: "Lamp",
            name: "Bardono Smart Lamp",
            description: "Easy to use with bluetooth connection",
            price: "62.23",
        },
        {
            id: 4,
            image: img4,
            category: "Sofa",
            name: "Sofa Empuk Banget",
            description: "Using kapuk randu material",
            price: "58.39",
        },
    ];
    return (
        <>
            <section className="product-slick">
                <Heading
                    headingSmall="Product"
                    headingLarge="Our popular product"
                    align="center"
                />
                <p className="paragraph-color description-center ">
                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                    dignissim placerat nisi, adipiscing mauris non purus
                    parturient.
                </p>

                <Slider {...settings}>
                    {fakeProductItems.map((product) => (
                        <div className="product-slick__item" key={product.id}>
                            <a href="/" className="product-slick__item-img">
                                <img src={product.image} alt="product item" />
                            </a>
                            <div className="product-slick__item-content">
                                <a
                                    href="/"
                                    className="product-slick__item-category paragraph-color"
                                >
                                    {product.category}
                                </a>
                                <a
                                    href="/"
                                    className="product-slick__item-name"
                                >
                                    {product.name}
                                </a>
                                <p className="product-slick__item-description paragraph-color">
                                    {product.description}
                                </p>
                                <p className="product-slick__item-price">
                                    ${product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        </>
    );
}
