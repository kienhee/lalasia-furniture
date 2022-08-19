import React, { Component } from "react";
import Slider from "react-slick";
import "./AsNavFor.scss";
export default class AsNavFor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2,
        });
    }

    render() {
        return (
            <div className="as-nav-for">
                <Slider
                    asNavFor={this.state.nav2}
                    ref={(slider) => (this.slider1 = slider)}
                    responsive={[
                        {
                            breakpoint: 600,
                            settings: {
                                arrows: false,
                            },
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: false,
                            },
                        },
                    ]}
                >
                    <div className="as-nav-for__first-slider">
                        <img
                            src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                            alt="product"
                        />
                    </div>
                    <div className="as-nav-for__first-slider">
                        <img
                            src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt="product"
                        />
                    </div>
                    <div className="as-nav-for__first-slider">
                        <img
                            src="https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80"
                            alt="product"
                        />
                    </div>
                    <div className="as-nav-for__first-slider">
                        <img
                            src="https://images.unsplash.com/photo-1507904953637-96429a46671a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                            alt="product"
                        />
                    </div>
                    <div className="as-nav-for__first-slider">
                        <img
                            src="https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                            alt="product"
                        />
                    </div>
                    <div className="as-nav-for__first-slider">
                        <img
                            src="https://images.unsplash.com/photo-1619596662481-085e45d69762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                            alt="product"
                        />
                    </div>
                    <div className="as-nav-for__first-slider">
                        <img
                            src="https://images.unsplash.com/photo-1622147681210-d7da05b4a7d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                            alt="product"
                        />
                    </div>
                </Slider>

                <Slider
                    asNavFor={this.state.nav1}
                    ref={(slider) => (this.slider2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    responsive={[
                        {
                            breakpoint: 1024,
                            settings: {
                                arrows: true,
                            },
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                arrows: false,
                            },
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: false,
                            },
                        },
                    ]}
                >
                    <div className="as-nav-for__second-slider">
                        <img
                            src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                            alt="product"
                        />
                    </div>
                    <div className="as-nav-for__second-slider">
                        <img
                            src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt="product"
                        />
                    </div>
                    <div className="as-nav-for__second-slider">
                        <img
                            src="https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80"
                            alt="product"
                        />
                    </div>
                    <div className="as-nav-for__second-slider">
                        <img
                            src="https://images.unsplash.com/photo-1507904953637-96429a46671a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                            alt="product"
                        />
                    </div>
                    <div className="as-nav-for__second-slider">
                        <img
                            src="https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                            alt="product"
                        />
                    </div>
                    <div className="as-nav-for__second-slider">
                        <img
                            src="https://images.unsplash.com/photo-1619596662481-085e45d69762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                            alt="product"
                        />
                    </div>
                    <div className="as-nav-for__second-slider">
                        <img
                            src="https://images.unsplash.com/photo-1622147681210-d7da05b4a7d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                            alt="product"
                        />
                    </div>
                </Slider>
            </div>
        );
    }
}
