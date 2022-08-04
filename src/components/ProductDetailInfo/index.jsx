import React from "react";
import "./ProductDetailInfo.scss";
import AsNavFor from "../AsNavFor";
import InfoProduct from "../InfoProduct";
export default function ProductDetailInfo() {
    return (
        <>
            <section className="product-detail-info">
                <div className="product-detail-info__item">
                    <AsNavFor />
                </div>
                <div className="product-detail-info__item">
                    <InfoProduct />
                </div>
            </section>
        </>
    );
}
