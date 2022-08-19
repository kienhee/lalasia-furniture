import { useState, useEffect } from "react";
import { Outlet, NavLink, Link, useLocation } from "react-router-dom";

import "./layout.scss";
export default function Layout() {
    const [showMenuMobile, setShowMenuMobile] = useState(false);
    let location = useLocation();
    useEffect(() => {
        setShowMenuMobile(false);
    }, [location.pathname]);
    return (
        <>
            <header className={`header ${showMenuMobile && "psf"}`}>
                <div className="container">
                    <nav className="navbar">
                        <NavLink to="/" className="navbar__logo">
                            <img
                                src={require("../../assets/images/logo.png")}
                                alt="logo"
                            />
                            <h3>Lalasia</h3>
                        </NavLink>
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
                                <NavLink to="/" className="navbar__NavLink ">
                                    Home
                                </NavLink>
                            </li>
                            <li className="navbar__item">
                                <NavLink
                                    to="/products"
                                    className="navbar__NavLink "
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li className="navbar__item">
                                <NavLink
                                    to="/services"
                                    className="navbar__NavLink "
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li className="navbar__item">
                                <Link to="#" className="navbar__NavLink ">
                                    Article
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="#" className="navbar__NavLink ">
                                    About Us
                                </Link>
                            </li>
                            <ul className="navbar__futures">
                                <li className="navbar__bag">
                                    <Link to="/bag">
                                        <i className="bx bx-shopping-bag"></i>
                                    </Link>
                                </li>
                                {/* <li className="navbar__user">
                                    <Link to="/user">
                                        <i className="bx bx-user"></i>
                                    </Link>
                                </li> */}
                            </ul>
                        </ul>
                        <ul className="navbar__futures">
                            <li className="navbar__bag">
                                <Link to="/bag">
                                    <i className="bx bx-shopping-bag"></i>
                                </Link>
                            </li>
                            {/* <li className="navbar__user">
                                <Link to="/user">
                                    <i className="bx bx-user"></i>
                                </Link>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </header>
            <div
                className={showMenuMobile ? "overlay show-overlay" : " overlay"}
                onClick={() => setShowMenuMobile(!showMenuMobile)}
            ></div>
            <main>
                <Outlet />
            </main>
            <footer className="footer">
                <div className="footer__container container">
                    <div className="footer__left">
                        <NavLink to="/" className="navbar__logo">
                            <img
                                src={require("../../assets/images/logo.png")}
                                alt="logo"
                            />
                            <h3>Lalasia</h3>
                        </NavLink>
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
