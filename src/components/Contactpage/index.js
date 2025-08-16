import React from 'react';
import ContactForm from '../ContactFrom'

import cnt1 from '../../images/icon/home.svg'
import cnt2 from '../../images/icon/mail-2.svg'
import cnt3 from '../../images/icon/app.svg'

const Contactpage = () => {

    return(
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <img src={cnt1} alt=""/>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Address</h2>
                                            <p>Near Kannankandy e-store, Thondayad jn, Calicut, Kerala India</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <img src={cnt2} alt=""/>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email Us</h2>
                                            <p>
                                            <a href='milto:hello@befirsthr.com' 
                                            target='_blank' 
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: "none", color: "inherit" }}
                                        >
                                                hello@befirsthr.com
                                                </a>
                                                </p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <img src={cnt3} alt=""/>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                                            <p>
                                                     <a 
                                        href="tel:+919400905954" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        +91 94009 05954
                                    </a>
                                            </p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Have Any Question?</h2>
                            <p>It is a long established fact that a reader will be distracted
                                content of a page when looking.</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm/>
                        </div>
                    </div>                
                </div>
            </div> 
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.5875686358336!2d75.81160117504899!3d11.263137588916784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b02a08e98b3%3A0xf3c286ef335db393!2sKannankandy%20EStore%20-%20Thondayad!5e1!3m2!1sen!2sin!4v1755001831571!5m2!1sen!2sin"></iframe>
                </div>
            </section>
        </section>
     )
        
}

export default Contactpage;
