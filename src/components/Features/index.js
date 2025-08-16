import React from 'react'
import {Link} from 'react-router-dom'
import { featres } from '../data/dummyFeatureCard';




const Features = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


   


    return(
        <section className={`wpo-features-section section-padding  ${props.featuresClass}`}>
            <div className="container">
                <div className="row">
                    {featres.map((featres, fitem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={fitem}>
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <div className="icon">
                                        <img src={featres.fIcon} alt=""/>
                                    </div>
                                </div>
                                <div className="wpo-features-text">
                                    <h2>{featres.title}</h2>
                                    <p>{featres.des}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;