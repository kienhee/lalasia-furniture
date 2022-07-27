import Heading from "../Heading";
import "./benefit.scss";
import benefitIcon1 from "../../assets/images/icon1.png";
import benefitIcon2 from "../../assets/images/icon2.png";
import benefitIcon3 from "../../assets/images/icon3.png";
export default function Benefits() {
    const benefitItems = [
        {
            id: 1,
            icon: benefitIcon1,
            title: "Many Choices",
            paragraph:
                "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
        },
        {
            id: 2,
            icon: benefitIcon2,
            title: "Fast and On Time",
            paragraph:
                "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
        },
        {
            id: 3,
            icon: benefitIcon3,
            title: "Affordable Price",
            paragraph:
                "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
        },
    ];
    return (
        <>
            <section className="benefit">
                <div className="container">
                    <Heading
                        headingSmall="Benefits"
                        headingLarge="Benefits when using our services"
                        align="left"
                    />
                    <div className="benefit__layout">
                        {benefitItems.map((item) => (
                            <div className="benefit__item" key={item.id}>
                                <div className="benefit__icon" key={item.id}>
                                    <img src={item.icon} alt="icon" />
                                </div>
                                <h3>{item.title}</h3>
                                <p className=" paragraph-color">
                                    {item.paragraph}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
