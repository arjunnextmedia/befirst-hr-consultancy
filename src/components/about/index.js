import React from 'react'
import {Link} from 'react-router-dom'
import abimg from '../../images/home/about-home-img.jpg'
import spimg1 from '../../images/ab-shape-1.png'
import spimg2 from '../../images/ab-shape-2.png'
import spicon from '../../images/icon/badge.svg'
// import sign from '../../images/signeture.png'


const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <section className={`wpo-about-section ${props.abClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                        <div className="wpo-about-img">
                            <img src={abimg} alt=""/>
                            <div className="wpo-ab-shape-1"><img src={spimg1} alt=""/></div>
                            <div className="wpo-ab-shape-2"><img src={spimg2} alt=""/></div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                        <div className="wpo-about-icon">
                            <div className="icon">
                                <img src={spicon} alt=""/>
                            </div>
                        </div>
                        <div className="wpo-about-icon-content">
                            
                            <h2>Empowering SMEs With <span>People-Driven </span>  Growth</h2>
                            <p>
Befirst HR & Management Consultancy is a leading HR consultancy in Calicut, Kerala, dedicated to helping SMEs in Kerala and India build, grow, and scale with the power of the right people.
                                </p>
                            <p>
We believe that people are the backbone of every successful business. Our mission is simple — equip growing businesses with world-class HR solutions, recruitment services, training, and compliance support so they can focus on what they do best: running and expanding their business.                                </p>
                            {/* <div className="signeture"> */}
                                {/* <span><img src={sign} alt=""/></span> */}
                                <p className='mb-0 ' style={{fontSize:'1.5rem'}}><strong>
                                    Abdurahman Charummal
                                    </strong>
                                    </p>
                                    <p >
                                        Founder & Principal Consultant
                                    </p>
                            {/* </div> */}
                            <Link onClick={ClickHandler} to="/about" className="btn theme-btn" >Read More</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;