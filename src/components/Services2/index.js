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
            speed: 2000,
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
                                <span className="badge-title">Our Services</span>
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
                                            <h2 style={{fontSize:'25px'}}>
                                                <Link onClick={ClickHandler} to={`/service-single/${service.id}`}>
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

                {/* Enhanced Styles for Maximum Content-Based Equal Height Cards */}
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

                    /* Force equal height cards based on maximum content */
                    .wpo-service-items .slick-track {
                        display: flex;
                        align-items: stretch;
                    }

                    .wpo-service-items .slick-slide {
                        height: auto;
                        padding: 0 10px;
                    }

                    .wpo-service-items .slick-slide > div {
                        height: 100%;
                    }

                    .wpo-service-item {
                        height: 100%;
                        min-height: 450px; /* Increased for maximum content */
                        padding: 40px 25px 30px 25px;
                        text-align: center;
                        position: relative;
                        background: #fff;
                        border-radius: 12px;
                        box-shadow: 0 4px 15px rgba(55, 87, 247, 0.08);
                        transition: all 0.3s ease;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        border: 1px solid rgba(55, 87, 247, 0.1);
                    }

                    .wpo-service-item:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 8px 30px rgba(55, 87, 247, 0.15);
                        border-color: rgba(55, 87, 247, 0.2);
                    }

                    .wpo-service-icon {
                        width: 100px;
                        height: 100px;
                        background: linear-gradient(135deg, #f4f6fd 0%, #e8ecff 100%);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 30px auto;
                        position: relative;
                        z-index: 1;
                        flex-shrink: 0;
                        border: 3px solid rgba(55, 87, 247, 0.1);
                        transition: all 0.3s ease;
                    }

                    .wpo-service-item:hover .wpo-service-icon {
                        background: linear-gradient(135deg, #3757f7 0%, #4c6bff 100%);
                        border-color: #3757f7;
                        transform: scale(1.05);
                    }

                    .wpo-service-icon .icon {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .wpo-service-icon .icon i {
                        font-size: 45px;
                        color: #3757f7;
                        transition: all 0.3s ease;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        height: 100%;
                        line-height: 1;
                    }

                    .wpo-service-item:hover .wpo-service-icon .icon i {
                        color: #fff;
                    }

                    .wpo-service-text {
                        flex-grow: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        min-height: 200px; /* Fixed minimum text area height */
                    }

                    .wpo-service-text h2 {
                        font-size: 24px !important;
                        margin-bottom: 20px;
                        line-height: 1.4;
                        min-height: 70px; /* Fixed title height for 2-3 lines */
                        max-height: 70px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: 700;
                        flex-shrink: 0;
                        overflow: hidden;
                    }

                    .wpo-service-text h2 a {
                        color: #1a202c;
                        text-decoration: none;
                        transition: all 0.3s ease;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-align: center;
                        width: 100%;
                    }

                    .wpo-service-text h2 a:hover {
                        color: #3757f7;
                    }

                    .wpo-service-text p {
                        font-size: 16px !important;
                        line-height: 1.7;
                        color: #64748b;
                        margin: 0;
                        flex-grow: 1;
                        display: -webkit-box;
                        -webkit-line-clamp: 4; /* Limit to 4 lines for consistency */
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        min-height: 110px; /* Fixed description height */
                        max-height: 110px;
                        padding-top: 5px;
                    }

                    /* Bottom border animation */
                    .wpo-service-item::before {
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 0;
                        height: 5px;
                        content: "";
                        background: linear-gradient(90deg, #3757f7 0%, #4c6bff 100%);
                        transition: all 0.4s ease;
                        border-radius: 0 0 12px 12px;
                    }

                    .wpo-service-item:hover::before {
                        width: 100%;
                    }

                    /* Extra Large Screens (1440px+) */
                    @media (min-width: 1440px) {
                        .wpo-service-item {
                            min-height: 480px;
                            padding: 45px 30px 35px 30px;
                        }
                        
                        .wpo-service-text h2 {
                            font-size: 26px !important;
                            min-height: 75px;
                            max-height: 75px;
                        }
                        
                        .wpo-service-text p {
                            font-size: 17px !important;
                            min-height: 120px;
                            max-height: 120px;
                        }
                    }

                    /* Large Desktop (1200px - 1439px) */
                    @media (max-width: 1439px) and (min-width: 1200px) {
                        .wpo-service-item {
                            min-height: 450px;
                            padding: 40px 25px 30px 25px;
                        }
                    }

                    /* Medium Desktop (992px - 1199px) */
                    @media (max-width: 1199px) and (min-width: 992px) {
                        .wpo-service-item {
                            min-height: 420px;
                            padding: 35px 20px 25px 20px;
                        }
                        
                        .wpo-service-text h2 {
                            font-size: 22px !important;
                            min-height: 65px;
                            max-height: 65px;
                        }
                        
                        .wpo-service-text p {
                            font-size: 15px !important;
                            min-height: 100px;
                            max-height: 100px;
                        }
                        
                        .wpo-service-icon {
                            width: 85px;
                            height: 85px;
                            line-height: 85px;
                        }
                        
                        .wpo-service-icon .icon i {
                            font-size: 40px;
                        }
                    }

                    /* Tablet Portrait (768px - 991px) */
                    @media (max-width: 991px) and (min-width: 768px) {
                        .wpo-service-item {
                            min-height: 400px;
                            padding: 35px 25px 25px 25px;
                        }
                        
                        .wpo-service-text h2 {
                            font-size: 22px !important;
                            min-height: 65px;
                            max-height: 65px;
                        }
                        
                        .wpo-service-text p {
                            font-size: 15px !important;
                            min-height: 95px;
                            max-height: 95px;
                        }
                    }

                    /* Mobile Landscape (576px - 767px) */
                    @media (max-width: 767px) and (min-width: 576px) {
                        .wpo-service-item {
                            min-height: 380px;
                            padding: 30px 20px 20px 20px;
                        }
                        
                        .wpo-service-text {
                            min-height: 180px;
                        }
                        
                        .wpo-service-text h2 {
                            font-size: 21px !important;
                            min-height: 60px;
                            max-height: 60px;
                            margin-bottom: 15px;
                        }
                        
                        .wpo-service-text p {
                            font-size: 14px !important;
                            min-height: 85px;
                            max-height: 85px;
                            -webkit-line-clamp: 3;
                        }
                        
                        .wpo-service-icon {
                            width: 80px;
                            height: 80px;
                            line-height: 80px;
                            margin-bottom: 25px;
                        }
                        
                        .wpo-service-icon .icon i {
                            font-size: 35px;
                        }
                    }

                    /* Mobile Portrait (up to 575px) */
                    @media (max-width: 575px) {
                        .wpo-service-item {
                            min-height: 360px;
                            padding: 25px 15px 20px 15px;
                        }
                        
                        .wpo-service-text {
                            min-height: 170px;
                        }
                        
                        .wpo-service-text h2 {
                            font-size: 20px !important;
                            min-height: 55px;
                            max-height: 55px;
                            margin-bottom: 15px;
                            line-height: 1.3;
                        }
                        
                        .wpo-service-text p {
                            font-size: 14px !important;
                            min-height: 80px;
                            max-height: 80px;
                            -webkit-line-clamp: 3;
                            line-height: 1.6;
                        }
                        
                        .wpo-service-icon {
                            width: 75px;
                            height: 75px;
                            line-height: 75px;
                            margin-bottom: 20px;
                        }
                        
                        .wpo-service-icon .icon i {
                            font-size: 32px;
                        }
                    }

                    /* Slider Arrow Styling */
                    .wpo-service-items .slick-prev,
                    .wpo-service-items .slick-next {
                        width: 50px !important;
                        height: 50px !important;
                        background: linear-gradient(135deg, #3757f7 0%, #4c6bff 100%) !important;
                        border-radius: 50%;
                        border: none;
                        box-shadow: 0 4px 15px rgba(55, 87, 247, 0.3);
                        transition: all 0.3s ease;
                        z-index: 2;
                    }

                    .wpo-service-items .slick-prev:hover,
                    .wpo-service-items .slick-next:hover {
                        background: linear-gradient(135deg, #2340ce 0%, #3757f7 100%) !important;
                        transform: scale(1.1);
                        box-shadow: 0 6px 20px rgba(55, 87, 247, 0.4);
                    }

                    .wpo-service-items .slick-prev:before,
                    .wpo-service-items .slick-next:before {
                        font-size: 20px !important;
                        color: white !important;
                        line-height: 1;
                    }

                    .wpo-service-items .slick-prev {
                        left: -60px !important;
                    }

                    .wpo-service-items .slick-next {
                        right: -60px !important;
                    }

                    /* Slider Dots Styling */
                    .wpo-service-items .slick-dots {
                        bottom: -50px;
                    }

                    .wpo-service-items .slick-dots li button:before {
                        font-size: 12px !important;
                        color: #3757f7 !important;
                        opacity: 0.5;
                        transition: all 0.3s ease;
                    }

                    .wpo-service-items .slick-dots li.slick-active button:before {
                        color: #3757f7 !important;
                        opacity: 1;
                        transform: scale(1.2);
                    }

                    .wpo-service-items .slick-dots li button:hover:before {
                        opacity: 0.8;
                        transform: scale(1.1);
                    }

                    /* Responsive Arrow Adjustments */
                    @media (max-width: 1199px) {
                        .wpo-service-items .slick-prev {
                            left: -45px !important;
                        }
                        
                        .wpo-service-items .slick-next {
                            right: -45px !important;
                        }
                        
                        .wpo-service-items .slick-prev,
                        .wpo-service-items .slick-next {
                            width: 45px !important;
                            height: 45px !important;
                        }
                        
                        .wpo-service-items .slick-prev:before,
                        .wpo-service-items .slick-next:before {
                            font-size: 18px !important;
                        }
                    }

                    @media (max-width: 991px) {
                        .wpo-service-items .slick-prev {
                            left: -35px !important;
                        }
                        
                        .wpo-service-items .slick-next {
                            right: -35px !important;
                        }
                        
                        .wpo-service-items .slick-prev,
                        .wpo-service-items .slick-next {
                            width: 40px !important;
                            height: 40px !important;
                        }
                        
                        .wpo-service-items .slick-prev:before,
                        .wpo-service-items .slick-next:before {
                            font-size: 16px !important;
                        }
                    }

                    @media (max-width: 767px) {
                        .wpo-service-items .slick-prev {
                            left: -25px !important;
                        }
                        
                        .wpo-service-items .slick-next {
                            right: -25px !important;
                        }
                        
                        .wpo-service-items .slick-prev,
                        .wpo-service-items .slick-next {
                            width: 35px !important;
                            height: 35px !important;
                        }
                        
                        .wpo-service-items .slick-prev:before,
                        .wpo-service-items .slick-next:before {
                            font-size: 14px !important;
                        }
                    }

                    /* Extra Small Mobile (up to 400px) */
                    @media (max-width: 400px) {
                        .wpo-service-item {
                            min-height: 340px;
                            padding: 20px 12px 15px 12px;
                        }
                        
                        .wpo-service-text h2 {
                            font-size: 18px !important;
                            min-height: 50px;
                            max-height: 50px;
                        }
                        
                        .wpo-service-text p {
                            font-size: 13px !important;
                            min-height: 75px;
                            max-height: 75px;
                        }
                        
                        .wpo-service-icon {
                            width: 70px;
                            height: 70px;
                            line-height: 70px;
                        }
                        
                        .wpo-service-icon .icon i {
                            font-size: 30px;
                        }
                    }
                `}</style>
            </section>
        );
    }
}

export default Services2;