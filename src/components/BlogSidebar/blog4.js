import React from 'react';
import {Link} from 'react-router-dom'

import blog1 from '../../images/blog/blog-90x80-1.jpg';
import blog2 from '../../images/blog/blog-90x80-2.jpg';
import blog3 from '../../images/blog/blog-90x80-3.jpg';
// import blog4 from '../../images/blog/blog-90x80-4.jpg';
import blog5 from '../../images/blog/blog-90x80-5.jpg';




const BlogSidebar4 = (props) => {

    const SubmitHandler = (e) =>{
       e.preventDefault()
    }

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                {/* <div className="widget about-widget">
                    <div className="img-holder">
                        <img src={about} alt=""/>
                    </div>
                    <h4>Jenny Watson</h4>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} to="/blog-single"><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single"><i className="ti-linkedin"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single"><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                    <div className="aw-shape">
                        <img src={about2} alt=""/>
                    </div>
                </div> */}
                {/* <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.."/>
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div> */}
                {/* <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog-single">Blockchain Consulting <span>5</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Commodity Traders <span>7</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Financial Planning <span>3</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Investment Consulting <span>6</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Online Banking Consulting <span>2</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Personal Consulting Advice <span>8</span></Link></li>
                    </ul>
                </div> */}
                <div className="widget recent-post-widget">
                    <h3>Related Articles</h3>
                    <div className="posts">
                        {/* <div className="post">
                            <div className="img-holder">
                                <img src={rp1} alt="" />
                            </div>
                            <div className="details">
                                <h4><Link onClick={ClickHandler} to="/blog-single">How SMEs Can Build a Strong Employer Brand in Kerala</Link></h4>
                                <span className="date">19 Jun 2021 </span>
                            </div>
                        </div> */}
                        <div className="post">
                            <div className="img-holder">
                                <img src={blog1} alt="" />
                            </div>
                            <div className="details">
                                <h4><Link onClick={ClickHandler} to="/blog-single">Why Outsourcing Recruitment Can Save You Time & Money – Benefits of Recruitment Outsourcing in Kerala</Link></h4>
                                <span className="date">22 May 2021 </span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={blog2} alt="" />
                            </div>
                            <div className="details">
                                <h4><Link onClick={ClickHandler} to="/blog-single">Top 10 Payroll Mistakes SMEs in Kerala Must Avoid</Link></h4>
                                <span className="date">12 Apr 2021 </span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={blog3} alt="" />
                            </div>
                            <div className="details">
                                <h4><Link onClick={ClickHandler} to="/blog-single">The Complete Guide to HR Compliance in Kerala</Link></h4>
                                <span className="date">12 Apr 2021 </span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={blog5} alt="" />
                            </div>
                            <div className="details">
                                <h4><Link onClick={ClickHandler} to="/blog-single">How to Choose the Right HR Consultancy in Calicut</Link></h4>
                                <span className="date">12 Apr 2021 </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Projects</h3>
                    </div>
                    <ul className="d-flex">
                        <li><Link onClick={ClickHandler} to="/project-single"><img src={ins1} alt=""/></Link></li>
                        <li><Link onClick={ClickHandler} to="/project-single"><img src={ins2} alt=""/></Link></li>
                        <li><Link onClick={ClickHandler} to="/project-single"><img src={ins3} alt=""/></Link></li>
                        <li><Link onClick={ClickHandler} to="/project-single"><img src={ins4} alt=""/></Link></li>
                        <li><Link onClick={ClickHandler} to="/project-single"><img src={ins5} alt=""/></Link></li>
                        <li><Link onClick={ClickHandler} to="/project-single"><img src={ins6} alt=""/></Link></li>
                    </ul>
                </div> */}
                {/* <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog-single">Consulting</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Planning</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Marketing</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Strategy</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Finance</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Solution</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Corporate</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Idea</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single">Market Reserch</Link></li>
                    </ul>
                </div> */}
                <div className="wpo-contact-widget widget">
                        <h2>How We Can <br/> Help You!</h2>
                        <p>Need a compliant and performance-driven HR system? </p>
                        <Link onClick={ClickHandler} to="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
     )
        
}

export default BlogSidebar4;
