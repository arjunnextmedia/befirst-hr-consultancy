import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogSidebar from '../BlogSidebar/blog1';
import { blogs } from '../data/dummyBlogs';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AllBlogSidebar from '../BlogSidebar/Allblog';

const BlogList = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 3;

    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="wpo-blog-pg-section section-padding bg-light">
            <div className="container">
                <div className="row">
                    {/* Blog Posts Section */}
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="wpo-blog-content">
                            <TransitionGroup>
                                {currentBlogs.map((blog, index) => (
                                    <CSSTransition key={index} timeout={400} classNames="fade">
                                        <article className="post-card shadow-sm rounded-3 mb-5 p-3 bg-white hover-shadow">
                                            {/* Blog Image */}
                                            {blog.blogImg && (
                                                <div className="entry-media mb-3 rounded overflow-hidden">
                                                    <Link to={blog.link}>
                                                        <img
                                                            src={blog.blogImg}
                                                            alt={blog.title}
                                                            className="img-fluid w-100 hover-zoom"
                                                        />
                                                    </Link>
                                                </div>
                                            )}

                                            {/* Blog Meta */}
                                            <div className="entry-meta text-muted small mb-2">
                                                <i className="fi flaticon-calendar me-1"></i> {blog.time}
                                            </div>

                                            {/* Blog Title */}
                                            <h3 className="entry-title mb-2 fw-bold">
                                                <Link to={blog.link} className="text-dark hover-primary">
                                                    {blog.title}
                                                </Link>
                                            </h3>

                                            {/* Blog Description */}
                                            {blog.description && (
                                                <p className="entry-description text-secondary mb-3">
                                                    {blog.description}
                                                </p>
                                            )}

                                            {/* Read More Button */}
                                            <Link
                                                to={blog.link}
                                                className="btn btn-outline-primary btn-sm rounded-pill px-4"
                                            >
                                                Read More
                                            </Link>
                                        </article>
                                    </CSSTransition>
                                ))}
                            </TransitionGroup>

                            {/* Pagination */}
                            <nav className="pagination-wrapper mt-4">
                                <ul className="pg-pagination d-flex justify-content-center list-unstyled">
                                    {Array.from({ length: totalPages }, (_, index) => (
                                        <li className="mx-1" key={index}>
                                            <button
                                                onClick={() => handlePageChange(index + 1)}
                                                className={`btn rounded-circle ${currentPage === index + 1
                                                    ? 'btn-primary text-white'
                                                    : 'btn-light'
                                                    }`}
                                            >
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <AllBlogSidebar blLeft={props.blLeft} />
                </div>
            </div>

            {/* Inline CSS */}
            <style>{`
                /* Fade animation for blog switching */
                .fade-enter {
                    opacity: 0;
                    transform: translateY(20px);
                }
                .fade-enter-active {
                    opacity: 1;
                    transform: translateY(0);
                    transition: opacity 0.4s ease, transform 0.4s ease;
                }
                .fade-exit {
                    opacity: 1;
                    transform: translateY(0);
                }
                .fade-exit-active {
                    opacity: 0;
                    transform: translateY(-20px);
                    transition: opacity 0.4s ease, transform 0.4s ease;
                }

                /* Hover zoom on blog images */
                .hover-zoom {
                    transition: transform 0.3s ease;
                }
                .hover-zoom:hover {
                    transform: scale(1.05);
                }

                /* Hover shadow on blog cards */
                .hover-shadow {
                    transition: box-shadow 0.3s ease;
                }
                .hover-shadow:hover {
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
                }

                /* Pagination styling */
                .pg-pagination button {
                    width: 40px;
                    height: 40px;
                    border: none;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }
                .pg-pagination button:hover {
                    background-color: #007bff;
                    color: white;
                }
            `}</style>
        </section>
    );
};

export default BlogList;
