import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./layout.scss";
export default function Layout() {
    const [showMenuMobile, setShowMenuMobile] = useState(false);
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="navbar">
                        <Link to="/" className="navbar__logo">
                            <img
                                src={require("../../assets/images/logo.png")}
                                alt="logo"
                            />
                            <h3>Lalasia</h3>
                        </Link>
                        <div
                            className="navbar__menu-mobile"
                            onClick={() => setShowMenuMobile(!showMenuMobile)}
                        >
                            <i className="bx bx-menu"></i>
                        </div>
                        <ul
                            className={
                                showMenuMobile
                                    ? "navbar__menu show-menu"
                                    : "navbar__menu"
                            }
                        >
                            <div
                                className="close-menu"
                                onClick={() =>
                                    setShowMenuMobile(!showMenuMobile)
                                }
                            >
                                <i className="bx bx-x"></i>
                            </div>
                            <li className="navbar__item">
                                <Link to="/" className="navbar__link">
                                    Home
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/products" className="navbar__link">
                                    Products
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/services" className="navbar__link">
                                    Services
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="#" className="navbar__link">
                                    Article
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="#" className="navbar__link">
                                    About Us
                                </Link>
                            </li>
                            <ul className="navbar__futures">
                                <li className="navbar__bag">
                                    <i className="bx bx-shopping-bag"></i>
                                </li>
                                <li className="navbar__user">
                                    <i className="bx bx-user"></i>
                                </li>
                            </ul>
                        </ul>
                        <ul className="navbar__futures">
                            <li className="navbar__bag">
                                <i className="bx bx-shopping-bag"></i>
                            </li>
                            <li className="navbar__user">
                                <i className="bx bx-user"></i>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div
                className={showMenuMobile ? "overlay show-overlay" : " overlay"}
                onClick={() => setShowMenuMobile(!showMenuMobile)}
            ></div>
            <Outlet />
            <footer className="footer">
                <div className="footer__container container">
                    <div className="footer__left">
                        <Link to="/" className="navbar__logo">
                            <img
                                src={require("../../assets/images/logo.png")}
                                alt="logo"
                            />
                            <h3>Lalasia</h3>
                        </Link>
                        <p>
                            Lalasia is digital agency that help you make better{" "}
                            <br />
                            experience iaculis cras in.
                        </p>
                    </div>
                    <div className="footer__right">
                        <ul>
                            <h3 className="footer__label">Product</h3>
                            <li>New Arrivals</li>
                            <li> Best Selling</li>
                            <li> Home Decor</li>
                            <li> Kitchen Set</li>
                        </ul>
                        <ul>
                            <h3 className="footer__label">Services</h3>
                            <li> Catalog</li>
                            <li>Blog</li>
                            <li> FaQ</li>
                            <li> Pricing</li>
                        </ul>
                        <ul>
                            <h3 className="footer__label"> Follow Us</h3>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}
