import React, { useState } from "react";
import "./Bag.scss";
import TitleLarge from "../../components/TitleLarge";
export default function Bag() {
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <section className="container bag">
                <TitleLarge title="Bag" content="You say, We'll do it ! " />
                <div className="bag__container">
                    <ul className="bag__products">
                        <li className="bag__products-item">
                            <img
                                src="https://images.unsplash.com/photo-1554104707-a76b270e4bbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt="product"
                                className="bag__products-item-image"
                            />
                            <div className="bag__products-info">
                                <div className="bag__products-item-name-color">
                                    <h3 className="bag__products-item-name">
                                        White Aesthetic Chair
                                    </h3>
                                    <p className="bag__products-item-color">
                                        Color: White
                                    </p>
                                </div>
                                <div className="bag__products-item-price-quantity">
                                    <p className="bag__products-item-price">
                                        $52
                                    </p>
                                    <div className="bag__products-item-quantity">
                                        <button
                                            onClick={() => {
                                                if (quantity <= 1) {
                                                    alert("delete product");
                                                    setQuantity(1);
                                                }
                                                setQuantity((prev) => prev - 1);
                                            }}
                                        >
                                            <i className="bx bx-minus"></i>
                                        </button>
                                        <span>{quantity}</span>
                                        <button
                                            onClick={() =>
                                                setQuantity((prev) => prev + 1)
                                            }
                                        >
                                            <i className="bx bx-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <i className="bx bx-x bag__products-item-remove"></i>
                        </li>
                    </ul>
                    <div className="bag__summary">
                        <ul className="bag__summary-products">
                            <li className="bag__summary-products-item">
                                <img
                                    src="https://images.unsplash.com/photo-1554104707-a76b270e4bbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    alt="product"
                                    className="bag__summary-products-item-image"
                                />
                                <div className="bag__summary-products-item-info">
                                    <h3 className="bag__summary-products-item-name">
                                        White Aesthetic Chair
                                    </h3>
                                    <span className="bag__summary-products-item-price-color">
                                        <p> $52</p>

                                        <h3> Color: White</h3>
                                    </span>
                                </div>
                                <span className="bag__summary-products-quantity">
                                    x{quantity}
                                </span>
                            </li>
                        </ul>
                        <div className="bag__summary-code">
                            <input type="text" placeholder="Coupon code" />
                            <button className="btn btn-primary">
                                Add code
                            </button>
                        </div>
                        <ul className="bag__summary-total">
                            <li className="bag__summary-total-item">
                                <p className="bag__summary-total-item-key">
                                    Subtotal
                                </p>
                                <span className="bag__summary-total-item-value">
                                    $1000
                                </span>
                            </li>
                            <li className="bag__summary-total-item">
                                <p className="bag__summary-total-item-key">
                                    Shipping
                                </p>
                                <span className="bag__summary-total-item-value">
                                    $15
                                </span>
                            </li>
                            <li className="bag__summary-total-item">
                                <p className="bag__summary-total-item-key">
                                    Discount
                                </p>
                                <span className="bag__summary-total-item-value">
                                    10%
                                </span>
                            </li>
                            <li className="bag__summary-total-item">
                                <p className="bag__summary-total-item-key">
                                    Tax
                                </p>
                                <span className="bag__summary-total-item-value">
                                    $1.91
                                </span>
                            </li>
                            <hr />
                            <li className="bag__summary-total-item">
                                <p className="bag__summary-total-item-key">
                                    Order Total
                                </p>
                                <span className="bag__summary-total-item-value">
                                    $1000
                                </span>
                            </li>
                        </ul>
                        <button className="btn btn-primary bag__summary-btn">
                            <p> Proceed to Checkout</p>
                            <i className="bx bxs-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
