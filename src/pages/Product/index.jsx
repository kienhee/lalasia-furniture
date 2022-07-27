import { useState } from "react";
import Slider from "react-slick";
import TitleLarge from "../../components/TitleLarge";
import "./product.scss";
import { v4 as uuidv4 } from "uuid";

export default function Product() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    };
    const fakeProductItems = [
        {
            id: uuidv4(),
            image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            category: "Living Room",
            name: "Wooden Bookshelf",
            description: "Combination of wood and wool",
            price: "62.23",
        },
        {
            id: uuidv4(),
            image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            category: "Chair",
            name: "White Aesthetic Chair",
            description: "Combination of wood and wool",
            price: "63.47",
        },
        {
            id: uuidv4(),
            image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            category: "Lamp",
            name: "Bardono Smart Lamp",
            description: "Easy to use with bluetooth connection",
            price: "62.23",
        },
        {
            id: uuidv4(),
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            category: "Sofa",
            name: "Sofa Empuk Banget",
            description: "Using kapuk randu material",
            price: "58.39",
        },
        {
            id: uuidv4(),
            image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            category: "Sofa",
            name: "Sofa Empuk Banget",
            description: "Using kapuk randu material",
            price: "58.39",
        },
        {
            id: uuidv4(),
            image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            category: "Sofa",
            name: "Sofa Empuk Banget",
            description: "Using kapuk randu material",
            price: "58.39",
        },
        {
            id: uuidv4(),
            image: "https://images.unsplash.com/photo-1582469566055-ae79af7370d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            category: "Sofa",
            name: "Sofa Empuk Banget",
            description: "Using kapuk randu material",
            price: "58.39",
        },
        {
            id: uuidv4(),
            image: "https://images.unsplash.com/photo-1582643381669-4ad3e9cdac73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            category: "Sofa",
            name: "Sofa Empuk Banget",
            description: "Using kapuk randu material",
            price: "58.39",
        },
        {
            id: uuidv4(),
            image: "https://images.unsplash.com/photo-1596178837012-a4ffb39d6db4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80",
            category: "Sofa",
            name: "Sofa Empuk Banget",
            description: "Using kapuk randu material",
            price: "58.39",
        },
        {
            id: uuidv4(),
            image: "https://images.unsplash.com/photo-1595428773960-5bea2830b067?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1144&q=80",
            category: "Sofa",
            name: "Sofa Empuk Banget",
            description: "Using kapuk randu material",
            price: "58.39",
        },
        {
            id: uuidv4(),
            image: "https://images.unsplash.com/photo-1595428774185-e1ec02f38bdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1163&q=80",
            category: "Sofa",
            name: "Sofa Empuk Banget",
            description: "Using kapuk randu material",
            price: "58.39",
        },
        {
            id: uuidv4(),
            image: "https://images.unsplash.com/photo-1595428773927-7c9c75203a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=392&q=80",
            category: "Sofa",
            name: "Sofa Empuk Banget",
            description: "Using kapuk randu material",
            price: "58.39",
        },
    ];
    return (
        <>
            <TitleLarge
                title="Products"
                content="We display products based on the latest products we have, if you want to see our old products please enter the name of the item "
            />
            <div className="container slide-product">
                <Slider {...settings}>
                    <div className="slide-product__item">
                        <img
                            src="https://images.unsplash.com/photo-1558211583-d26f610c1eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80"
                            alt="product"
                        />
                    </div>
                    <div className="slide-product__item">
                        <img
                            src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="product"
                        />
                    </div>
                    <div className="slide-product__item">
                        <img
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="product"
                        />
                    </div>
                </Slider>
            </div>
            <div className="product__filter container">
                <div className="input__search">
                    <i class="bx bx-search text-secondary"></i>
                    <input type="text" placeholder="Search property" />
                    <button className="btn btn-primary">Find&nbsp;Now</button>
                </div>
                <button className="btn-filter">
                    <i class="bx bx-filter-alt"></i>
                    Filter
                </button>
            </div>
            <div className="product__sort container">
                <h2>
                    Total Product <span>{fakeProductItems.length}</span>
                </h2>
            </div>
            <div className="layout-product container">
                {fakeProductItems.map((item) => (
                    <div className="layout-product__item" key={item.id}>
                        <a href="/" className="layout-product__item-img">
                            <img src={item.image} alt="product item" />
                        </a>
                        <div className="layout-product__item-content">
                            <a
                                href="/"
                                className="layout-product__item-category paragraph-color"
                            >
                                {item.category}
                            </a>
                            <a href="/" className="layout-product__item-name">
                                {item.name}
                            </a>
                            <p className="layout-product__item-description paragraph-color">
                                {item.description}
                            </p>
                            <p className="layout-product__item-price">
                                ${item.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
