import React from 'react'
import { Link } from 'react-router-dom'

import srvimg1 from '../../images/icon/clipboard.svg'
import srvimg2 from '../../images/icon/briefcase.svg'
import srvimg3 from '../../images/icon/chart.svg'
import srvimg4 from '../../images/icon/badge.svg'
import srvimg5 from '../../images/icon/goal.svg'
import srvimg6 from '../../images/icon/handshake.svg'
import { service } from '../data/dummyService'


const Services = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }



    return (
        <section className="wpo-service-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span >Our Services</span>
                            <h2>Explore Our Services</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {service.map((service, sitem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={sitem}>
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <div className="icon">
                                        <i className={service.sIcon}></i>
                                    </div>
                                </div>
                                <div className="wpo-service-text">
                                    <h2><Link onClick={ClickHandler} to={`/service-single/${service.id}`}>{service.title}</Link></h2>
                                    <p>{service.des}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Services;