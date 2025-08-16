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
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
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
                                    </li>                                    <li>
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
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Services </h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/service-single/1">HR Consultancy Services</Link></li>
                                <li><Link onClick={ClickHandler} to="/service-single/2">Management Consultancy</Link></li>
                                <li><Link onClick={ClickHandler} to="/service-single/3">Human Capital Development</Link></li>
                                <li><Link onClick={ClickHandler} to="/service-single/4">Staff & Leadership Training</Link></li>
                                <li><Link onClick={ClickHandler} to="/service-single/5">Payroll Setup & Training</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Our Policy</h3>
                            </div>
                            <ul >
                                <li><Link onClick={ClickHandler} to="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link onClick={ClickHandler} to="/terms">Terms of Use</Link></li>
                                {/* <li><Link onClick={ClickHandler} to="/project-single"><img src={ins3} alt=""/></Link></li>
                                <li><Link onClick={ClickHandler} to="/project-single"><img src={ins4} alt=""/></Link></li>
                                <li><Link onClick={ClickHandler} to="/project-single"><img src={ins5} alt=""/></Link></li>
                                <li><Link onClick={ClickHandler} to="/project-single"><img src={ins6} alt=""/></Link></li> */}
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
                        <p className="copyright"> Copyright &copy; 2021 Consultar by <Link onClick={ClickHandler} to="/home">wpOceans</Link>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;