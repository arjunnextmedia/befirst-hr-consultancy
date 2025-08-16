import React from 'react';
import { Link } from 'react-router-dom';

const Support = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return(
        <section className="wpo-support-section">
            <div className="container">
                <div className="wpo-support-wrapper">
                    <div className="wpo-support-text">
                        <h2>HR Solutions That Work for Kerala Businesses</h2>
                        <p>
                           From recruitment to leadership training – we’ve got you covered.
                        </p>
                    </div>
                    <div className="wpo-support-btn">
                        <Link onClick={ClickHandler} to="/contact" className="forum-btn">
                           Ask for Support
                        </Link>
                 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support;