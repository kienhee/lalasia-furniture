import React from "react";
import "./InfoProduct.scss";
export default function InfoProduct() {
    return (
        <div className="info-product">
            <h2 className="info-product__name">White Aesthetic Chair</h2>
            <p className="info-product__category paragraph-color">
                category: <a href="/">Ghees</a>
            </p>
            <div className="info-product__color">
                <label>Color</label>
                <span style={{ backgroundColor: "#000" }}></span>
                <span style={{ backgroundColor: "#314443" }}></span>
                <span style={{ backgroundColor: "#C5A26E" }}></span>
                <span style={{ backgroundColor: "#D8DBE0" }}></span>
            </div>
            <p className="info-product__description paragraph-color">
                Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse
                facilisis facilisis ligula felis et a parturient aenean. Ac
                maecenas ultricies felis risus scelerisque duis posuere... Read
                More
            </p>
            <h2 className="info-product__price">$99.98</h2>
            <div className="info-product__actions">
                <button className="btn btn-primary">Buy Now</button>
                <button className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    );
}
