import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogs } from '../data/dummyBlogs';



const BlogSlider = () => {
  const ClickHandler = () => window.scrollTo(10, 0);



  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    cssEase: 'ease-in-out',
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="wpo-blog-section section-padding">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <span className="badge-title">Blog</span>
            <h2 className="section-heading">Our Blog Packages</h2>
          </div>
        </div>

        <Slider {...settings}>
          {blogs.map((blog, index) => (
            <div key={index} className="px-3">
              <div className="blog-card">
                <div className="blog-image">
                  <img src={blog.blogImg} alt={blog.title} />
                </div>
                <div className="blog-content">
                  <h4 className="blog-title">
                    <Link onClick={ClickHandler} to={blog.link}>{blog.title}</Link>
                  </h4>
                  <p className="blog-description">{blog.description}</p>
                  <p className="blog-date">{blog.time}</p>
                  <Link
                    onClick={ClickHandler}
                    to={blog.link}
                    className="read-more-btn"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .badge-title {
          background: rgba(35, 64, 206, 0.08);
          color: #2340ce;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
          border-radius: 999px;
          padding: 0.5em 1.5em;
          text-transform: uppercase;
          display: inline-block;
        }

        .section-heading {
          font-weight: 700;
          font-size: 2rem;
          margin-top: 10px;
          color: #1a1a1a;
        }

        .blog-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }

        .blog-image img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .blog-card:hover .blog-image img {
          transform: scale(1.05);
        }

        .blog-content {
          padding: 20px;
        }

        .blog-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: #1a1a1a;
        }

        .blog-title a {
          text-decoration: none;
          color: inherit;
        }

        .blog-date {
          font-size: 0.85rem;
          color: #666;
          margin-bottom: 15px;
        }

        .read-more-btn {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(35, 64, 206, 0.08);
          color: #2340ce;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.85rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .read-more-btn:hover {
          background: #2340ce;
          color: #fff;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default BlogSlider;
