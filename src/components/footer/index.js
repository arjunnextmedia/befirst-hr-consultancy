import React from 'react'
import {Link}  from 'react-router-dom'
// import Logo from '../../images/Befirst-Logos-5.png'
import Logo from '../../images/Befirst-Logos-png.png'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 - About/Logo */}
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <Link onClick={ClickHandler} to="/">
                                    <img src={Logo} alt="blog"/>
                                </Link>
                            </div>
                            <p>Empowering businesses in Kerala to hire smarter, stay compliant, and build workplaces where people thrive.</p>
                            <ul>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-twitter-alt"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} to="/">
                                        <i className="ti-google"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                     {/* Column 4 - Contact */}
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact</h3>
                            </div>
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-location"></i>Near Kannankandy e-store, Thondayad jn, Calicut, Kerala India</li>
                                    <li>
                                        <i className="fi flaticon-phone-call"></i>
                                        <a 
                                            href="tel:+919400905954" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            style={{ textDecoration: 'none', color: 'inherit' }}
                                        >
                                            +91 94009 05954
                                        </a>
                                    </li>
                                    <li>
                                        <i className="fi flaticon-send"></i>
                                        <a
                                            href="mailto:hello@befirsthr.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ textDecoration: "none", color: "inherit" }}
                                        >
                                            hello@befirsthr.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 - HR Services */}
                    <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>HR Services</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/service-single/1">HR Consulting Services</Link></li>
                                <li><Link onClick={ClickHandler} to="/service-single/3">Human Capital Development</Link></li>
                                <li><Link onClick={ClickHandler} to="/service-single/5">Payroll Setup & Training</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3 - Management Services */}
                    <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Consultancy</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/service-single/2">Management Consultancy</Link></li>
                                <li><Link onClick={ClickHandler} to="/service-single/4">Staff & Leadership Training</Link></li>
                                <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                            </ul>
                        </div>
                    </div>

                   

                    {/* Column 5 - Legal/Policy */}
                    <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Our Policy</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link onClick={ClickHandler} to="/terms">Terms of Use</Link></li>
                            </ul>
                            <div className="widget-title" style={{ marginTop: '20px' }}>
                                <h3>Explore</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/careers">Careers</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> Copyright &copy; 2025 Be First HR by <Link onClick={ClickHandler} to="">Next Media</Link>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;