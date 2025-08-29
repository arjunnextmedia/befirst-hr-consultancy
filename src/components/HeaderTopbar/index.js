import React from 'react'
import {Link}  from 'react-router-dom'


const HeaderTopbar = () => {
    return(	
        <div className="topbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-md-7 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi ti-location-pin"></i>Near Kannankandy e-store, Thondayad jn., Calicut, Kerala India</li>
                                <li><i className="fi flaticon-email"></i> hello@befirsthr.com </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-5 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li>Visit our social pages</li>
                                <li><a 
                                href="https://www.facebook.com/share/1BZpRjpJGm/?mibextid=wwXIfr"
                                 target='_blank' 
                                    rel="noreferrer"
                                ><i className="ti-facebook"></i></a></li>
                                {/* <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li> */}
                                <li><a href="https://www.instagram.com/befirsthrm/"
                                 target='_blank' 
                                    rel="noreferrer"
                                 ><i className="ti-instagram"></i>
                                 </a></li>
                                <li><a href="https://www.linkedin.com/showcase/befirsthrm/?viewAsMember=true"
                                     target='_blank' 
                                    rel="noreferrer"
                                ><i className="ti-linkedin"></i>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;