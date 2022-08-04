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
                            src="https://images.unsplash.com/photo-1659542226430-006adbd62f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                            alt=""
                        />
                    </div>
                    <div className="as-nav-for__first-slider">
                        <img
                            src="https://images.unsplash.com/photo-1659535635086-18d69d56d0a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                            alt=""
                        />
                    </div>
                    <div className="as-nav-for__first-slider">
                        <img
                            src="https://images.unsplash.com/photo-1659535635086-18d69d56d0a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                            alt=""
                        />
                    </div>
                    <div className="as-nav-for__first-slider">
                        <img
                            src="https://images.unsplash.com/photo-1659535635086-18d69d56d0a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                            alt=""
                        />
                    </div>
                    <div className="as-nav-for__first-slider">
                        <img
                            src="https://images.unsplash.com/photo-1659535635086-18d69d56d0a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                            alt=""
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
                            src="https://images.unsplash.com/photo-1659542226430-006adbd62f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                            alt=""
                        />
                    </div>
                    <div className="as-nav-for__second-slider">
                        <img
                            src="https://images.unsplash.com/photo-1659535635086-18d69d56d0a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                            alt=""
                        />
                    </div>
                    <div className="as-nav-for__second-slider">
                        <img
                            src="https://images.unsplash.com/photo-1659535635086-18d69d56d0a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                            alt=""
                        />
                    </div>
                    <div className="as-nav-for__second-slider">
                        <img
                            src="https://images.unsplash.com/photo-1659535635086-18d69d56d0a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                            alt=""
                        />
                    </div>
                    <div className="as-nav-for__second-slider">
                        <img
                            src="https://images.unsplash.com/photo-1659535635086-18d69d56d0a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                            alt=""
                        />
                    </div>
                </Slider>
            </div>
        );
    }
}
