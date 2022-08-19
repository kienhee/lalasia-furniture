import React from "react";
import TitleLarge from "../../components/TitleLarge";
import "./services.scss";
import { v4 as uuidv4 } from "uuid";
export default function index() {
    const services = [
        {
            id: uuidv4(),
            number: "01",
            name: "Furniture",
            description:
                "At the ultimate smart home, you're met with technology before you even step through the front door. ",
        },
        {
            id: uuidv4(),
            number: "02",
            name: "Home Decoration",
            description:
                "Create A Calming Summer Escape With Our Luxurious Home Accessories For The Balmy Evenings.",
        },
        {
            id: uuidv4(),
            number: "03",
            name: "Kitchen Cabinet",
            description:
                "Introducing the modular kitchen cabinet system. Start with our huge selection of base and wall cabinets. ",
        },
        {
            id: uuidv4(),
            number: "04",
            name: "Interior Design",
            description:
                "Innovative products often feature innovative designs that play with the patterns we are familiar.",
        },
        {
            id: uuidv4(),
            number: "05",
            name: "Exterior Design",
            description:
                "These stylish and resilient products provide up-to-date options for roofing, siding, decking, and outdoor spaces.",
        },
        {
            id: uuidv4(),
            number: "06",
            name: "Custom Furniture",
            description:
                "With Quality Materials and Modern Designs, we have Designs for all Tastes. we bring you World Class Designs.",
        },
    ];
    return (
        <>
            <section className="services">
                <div className="container">
                    <TitleLarge
                        title="Services"
                        content="The product crafted by talented crafter and using high quality material with love inside"
                    />
                    <div className="services__img">
                        <img
                            src={require("../../assets/images/service.png")}
                            alt="nice"
                        />
                    </div>
                    <div className="services__container">
                        {services.map((service) => (
                            <div className="services__item" key={service.id}>
                                <h2 className="services__item-number">
                                    {service.number}
                                </h2>
                                <p className="services__item-name">
                                    {service.name}
                                </p>
                                <p className="services__item-description paragraph-color">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
