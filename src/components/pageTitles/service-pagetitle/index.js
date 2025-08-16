import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../images/about-banner-2.jpg'; 

const PageTitle = (props) => {
    return (
        <div
            className="wpo-breadcumb-area"
            style={{
                background: `url(	https://img.freepik.com/premium-photo/cybersecurit…cure-internet-connection_1101054-65660.jpg?w=2000) no-repeat center top / cover`,
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
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <span>{props.pagesub}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PageTitle;
