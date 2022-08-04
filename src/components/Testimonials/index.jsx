import React from "react";
import Heading from "../Heading";
import Slider from "react-slick";
import img from "../../assets/images/Testimonials.png";
import star from "../../assets/images/star.png";
import "./testimonials.scss";
import { v4 as uuidv4 } from "uuid";
export default function Testimonials() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        arrows: false,
    };
    const rateFake = [
        {
            id: uuidv4(),
            content:
                "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
            avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            name: "Janne Cooper",
            rated: "4.5",
        },
        {
            id: uuidv4(),
            content:
                "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
            avatar: "https://images.unsplash.com/photo-1611403119860-57c4937ef987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            name: "Berry Gunawan",
            rated: "4.0",
        },
        {
            id: uuidv4(),
            content:
                "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
            avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            name: "Cobocannaeru",
            rated: "3.5",
        },
        {
            id: uuidv4(),
            content:
                "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
            avatar: "https://images.unsplash.com/photo-1542534759-05f6c34a9e63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            name: "Bahen",
            rated: "5.0",
        },
        {
            id: uuidv4(),
            content:
                "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            name: "Melona san",
            rated: "4.5",
        },
        {
            id: uuidv4(),
            content:
                "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
            avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            name: "Heni",
            rated: "4.0",
        },
    ];
    return (
        <>
            <section className="testimonials">
                <Heading
                    headingSmall="Testimonials"
                    headingLarge="What our customer say"
                    align="center"
                />
                <p className="paragraph-color description-center "></p>
                <Slider {...settings}>
                    {rateFake.map((item) => (
                        <div className="testimonials__item" key={item.id}>
                            <img src={img} alt="testimonials" />
                            <p className="paragraph-color ">{item.content}</p>
                            <div className="testimonials__flex">
                                <div className="testimonials__user">
                                    <img src={item.avatar} alt="Avatar user" />
                                    <p>{item.name}</p>
                                </div>
                                <div className="testimonials__rate">
                                    <img src={star} alt="Rate" />{" "}
                                    <p>{item.rated}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        </>
    );
}
