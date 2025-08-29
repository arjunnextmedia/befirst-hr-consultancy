import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../images/services/service-banner-2.jpg';

const PageTitle = (props) => {
    return (
        <div
            className="wpo-breadcumb-area"
            style={{
                background: `url(${bannerImg}) no-repeat center top / cover`,
                position: 'relative',
                zIndex: 1
            }}
        >
            {/* Overlay */}
            <div
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    background: '#6e84b5',
                    opacity: 0,
                    zIndex: -1
                }}
            ></div>

            <div className="wpo-breadcumb-wrap">
                <h2>{props.pageTitle}</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><span>{props.serviceTitle}</span></li>
                </ul>
            </div>
        </div>
    );
};

export default PageTitle;
