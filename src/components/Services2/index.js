import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { service } from "../data/dummyService";


class Services2 extends Component {
    render() {
        var settings = {
            dots: true,
            arrows: true,
            speed: 3000,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }


        return (
            <section className={`wpo-service-section section-padding ${this.props.srvClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div style={{ textAlign: 'center' }}>

                                <span className="badge-title " >Our Services</span>
                            </div>
                            <div className="wpo-section-title">
                                <h2>Explore Our Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="wpo-service-items wpo-service-slider owl-carousel">
                        <Slider {...settings}>
                            {service.map((service, sitem) => (
                                <div className="col-lg-4 col-md-6 col-12" key={sitem}>
                                    <div className="wpo-service-item">
                                        <div className="wpo-service-icon">
                                            <div className="icon">
                                                <i className={service.sIcon}></i>
                                            </div>
                                        </div>
                                        <div className="wpo-service-text">
                                            <h2 style={{fontSize:'25px'}}><Link onClick={ClickHandler} to={`/service-single/${service.id}`}>
                                                {service.title}
                                            </Link>
                                            </h2>
                                            <p style={{fontSize:'18px'}}>{service.des}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>

                    </div>
                </div>
                {/* Styles */}
                <style jsx>{`
  
      .badge-title {
        background: rgba(35, 64, 206, 0.08);
        color: #2340ce;
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 1px;
        border-radius: 999px;
        padding: 0.5em 1.5em;
        text-transform: uppercase;
        display: inline-block;
      }
     
    `}</style>
            </section>
        );
    }
}

export default Services2;



