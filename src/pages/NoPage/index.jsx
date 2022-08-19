import React from "react";
import "./NoPage.scss";
export default function NoPage() {
    return (
        <>
            <div className="container">
                <div id="notfound">
                    <div class="notfound">
                        <div class="notfound-bg">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <h1>oops!</h1>
                        <h2>Error 404 : Page Not Found</h2>
                        <a href="/">Home</a>
                        <div class="notfound-social">
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i class="bx bxl-facebook"></i>
                            </a>
                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i class="bx bxl-twitter"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i class="bx bxl-instagram-alt"></i>
                            </a>
                            <a
                                href="https://www.google.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i class="bx bxl-google"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
