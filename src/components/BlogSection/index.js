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
            <h2 className="section-heading">Blogs and News Updates</h2>
          </div>
        </div>

        <Slider {...settings}>
          {blogs.map((blog, index) => (
            <div key={index} className="px-3">
              <div className="blog-card">
                <div className="blog-image">
                  <img src={blog.blogImg} alt={blog.title} />
                  <div className="image-overlay"></div>
                </div>
                <div className="blog-content">
                  <h4 className="blog-title">
                    <Link onClick={ClickHandler} to={blog.link}>{blog.title}</Link>
                  </h4>
                  <p className="blog-description">{blog.description}</p>
                  <div className="blog-footer">
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

        /* Force equal height for all slides */
        .slick-track {
          display: flex;
          align-items: stretch;
        }

        .slick-slide {
          height: auto;
        }

        .slick-slide > div {
          height: 100%;
        }

        .px-3 {
          height: 100%;
          padding: 0 12px;
        }

        .blog-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(55, 87, 247, 0.08);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(55, 87, 247, 0.1);
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(55, 87, 247, 0.15);
          border-color: rgba(55, 87, 247, 0.2);
        }

        .blog-image {
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }

        .blog-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(55, 87, 247, 0.1) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .blog-card:hover .image-overlay {
          opacity: 1;
        }

        .blog-card:hover .blog-image img {
          transform: scale(1.08);
        }

        .blog-content {
          padding: 25px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .blog-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #1a202c;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 4.2em; /* 3 lines of text (1.4 line-height × 3) */
        }

        .blog-title a {
          text-decoration: none;
          color: inherit;
          transition: color 0.3s ease;
          display: block;
        }

        .blog-title a:hover {
          color: #3757f7;
        }

        .blog-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #64748b;
          margin-bottom: 20px;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .blog-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 15px;
          border-top: 1px solid rgba(55, 87, 247, 0.1);
        }

        .blog-date {
          font-size: 0.85rem;
          color: #94a3b8;
          margin: 0;
          font-weight: 500;
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          padding: 10px 20px;
          background: linear-gradient(135deg, rgba(35, 64, 206, 0.08) 0%, rgba(55, 87, 247, 0.1) 100%);
          color: #2340ce;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.85rem;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(35, 64, 206, 0.2);
          white-space: nowrap;
        }

        .read-more-btn:hover {
          background: linear-gradient(135deg, #3757f7 0%, #4c6bff 100%);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(55, 87, 247, 0.3);
        }

        /* Dots styling */
        .slick-dots {
          bottom: -50px;
        }

        .slick-dots li button:before {
          font-size: 12px;
          color: #3757f7;
          opacity: 0.5;
        }

        .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #3757f7;
        }

        /* Responsive Design */
        
        /* Extra Large Screens (1440px+) */
        @media (min-width: 1440px) {
          .blog-image img {
            height: 220px;
          }
          
          .blog-title {
            font-size: 1.3rem;
          }
        }

        /* Medium Desktop (1024px - 1199px) */
        @media (max-width: 1199px) and (min-width: 1024px) {
          .blog-image img {
            height: 180px;
          }
          
          .blog-content {
            padding: 20px;
          }
          
          .blog-title {
            font-size: 1.1rem;
          }
        }

        /* Tablet (768px - 1023px) */
        @media (max-width: 1023px) and (min-width: 768px) {
          .blog-image img {
            height: 160px;
          }
          
          .blog-content {
            padding: 18px;
          }
          
          .blog-title {
            font-size: 1.1rem;
          }
        }

        /* Mobile (up to 767px) */
        @media (max-width: 767px) {
          .blog-image img {
            height: 180px;
          }
          
          .blog-content {
            padding: 20px;
          }
          
          .blog-title {
            font-size: 1.1rem;
          }
        }

        /* Small Mobile (up to 480px) */
        @media (max-width: 480px) {
          .blog-image img {
            height: 160px;
          }
          
          .blog-content {
            padding: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default BlogSlider;