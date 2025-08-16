import React, { Component } from 'react'
// import Logo from '../../images/logo.png'
// import Logo from '../../images/Befirst-Logos-5.png'
import Logo from '../../images/Befirst-Logos0.jpg'

import { Link } from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'
import HeaderTopbar from '../../components/HeaderTopbar'
import ConsultingModal from '../Modal'
import { getSearchSuggestions } from '../data/dummyServiceSearch'

export default class Header2 extends Component {

    state = {
        isSearchShow: false,
        isConsultingModalOpen: false,
        searchQuery: '',
        searchSuggestions: [],
        showSuggestions: false,
    }

    searchHandler = () => {
        this.setState({
            isSearchShow: !this.state.isSearchShow,
            searchQuery: '',
            searchSuggestions: [],
            showSuggestions: false,
        })
    }

    toggleConsultingModal = () => {
        this.setState({
            isConsultingModalOpen: !this.state.isConsultingModalOpen
        })
    }

    // Handle search input change
    handleSearchInputChange = (e) => {
        const query = e.target.value;
        this.setState({ searchQuery: query });

        if (query.trim().length > 1) {
            const suggestions = getSearchSuggestions(query, 5);
            this.setState({
                searchSuggestions: suggestions,
                showSuggestions: true
            });
        } else {
            this.setState({
                searchSuggestions: [],
                showSuggestions: false
            });
        }
    }

    // Handle search form submission
    handleSearchSubmit = (e) => {
        e.preventDefault();
        if (this.state.searchQuery.trim()) {
            const suggestions = getSearchSuggestions(this.state.searchQuery, 1);
            if (suggestions.length > 0) {
                // Use React Router's history instead of window.location.href
                this.props.history?.push(suggestions[0].route) || (window.location.href = suggestions[0].route);
            }
        }
    }

    // Handle suggestion click - Fixed version
    handleSuggestionClick = (route) => {
        // Prevent the blur event from interfering
        this.setState({
            showSuggestions: false,
            searchQuery: '',
            searchSuggestions: [],
        }, () => {
            // Use callback to ensure state is updated before navigation
            // Try React Router first, fallback to window.location
            if (this.props.history) {
                this.props.history.push(route);
            } else {
                window.location.href = route;
            }
        });
    }

    // Handle clicking outside to close suggestions - Fixed version
    handleSearchBlur = () => {
        // Increase delay to ensure suggestion clicks are processed first
        setTimeout(() => {
            this.setState({
                showSuggestions: false
            });
        }, 300);
    }

    // Add mouse down handler to prevent blur from firing before click
    handleSuggestionMouseDown = (e) => {
        // Prevent the input from losing focus when clicking on suggestions
        e.preventDefault();
    }

    render() {
        const { isSearchShow, isConsultingModalOpen, searchQuery, searchSuggestions, showSuggestions } = this.state;

        const ClickHandler = () => {
            window.scrollTo(10, 0);
        }

        return (
            <>
                <header id="header">
                    <HeaderTopbar />
                    <div className="wpo-site-header">
                        <nav className="navigation navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                        <div className="mobail-menu">
                                            <MobileMenu />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-6">
                                        <div className="navbar-header">
                                            <Link onClick={ClickHandler} className="navbar-brand" to="/">
                                                <img src={Logo} alt="BeFirst-logo" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-1 col-1">
                                        <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                            <button className="menu-close"><i className="ti-close"></i></button>
                                            <ul className="nav navbar-nav mb-2 mb-lg-0">
                                                <li >
                                                    <Link onClick={ClickHandler} to="/">Home</Link>
                                                </li>
                                                <li>
                                                    <Link onClick={ClickHandler} to="/about">
                                                        About Us
                                                    </Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} to="/about">Who We Are</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/about2">Founder’s Vision</Link></li>
                                                        <li><Link onClick={ClickHandler} to="/about3">Our Mission & Values</Link></li>
                                                    </ul>
                                                </li>
                                                <li >
                                                    <Link onClick={ClickHandler} to="/service">Services</Link>
                                                </li>
                                                <li >
                                                    <Link onClick={ClickHandler} to="/blogs">Articles</Link>
                                                </li>
                                                <li >
                                                    <Link onClick={ClickHandler} to="/faqs">Faqs</Link>
                                                </li>
                                                <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-2 col-2">
                                        <div className="header-right">
                                            <div className="close-form">
                                                <button
                                                    onClick={this.toggleConsultingModal}
                                                    className="theme-btn"
                                                    type="button"
                                                    style={{
                                                        opacity: '1 !important',
                                                        visibility: 'visible !important',
                                                        display: 'inline-block !important',
                                                        backgroundColor: '#304FE9',
                                                        color: 'white',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease',
                                                        textDecoration: 'none'
                                                    }}
                                                >
                                                    Free Consultation                                                </button>
                                            </div>
                                            <div className="header-search-form-wrapper">
                                                <div className="cart-search-contact">
                                                    <button onClick={this.searchHandler} className="search-toggle-btn">
                                                        <i className={`${isSearchShow ? 'ti-close' : 'ti-search'}`}></i>
                                                    </button>
                                                    <div className={`header-search-form ${isSearchShow ? 'header-search-content-toggle' : ''}`}>
                                                        <form onSubmit={this.handleSearchSubmit}>
                                                            <div style={{ position: 'relative' }}>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Search services..."
                                                                    value={searchQuery}
                                                                    onChange={this.handleSearchInputChange}
                                                                    onBlur={this.handleSearchBlur}
                                                                    onFocus={() => {
                                                                        if (searchQuery.trim().length > 1) {
                                                                            this.setState({ showSuggestions: true });
                                                                        }
                                                                    }}
                                                                />
                                                                <button type="submit">
                                                                    <i className="fi flaticon-magnifiying-glass"></i>
                                                                </button>

                                                                {/* Search Suggestions Dropdown - Fixed version */}
                                                                {showSuggestions && searchSuggestions.length > 0 && (
                                                                    <div
                                                                        className="search-suggestions-dropdown"
                                                                        style={{
                                                                            position: 'absolute',
                                                                            top: '100%',
                                                                            left: 0,
                                                                            right: 0,
                                                                            backgroundColor: '#fff',
                                                                            border: '1px solid #e0e0e0',
                                                                            borderTop: 'none',
                                                                            borderRadius: '0 0 6px 6px',
                                                                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                                                            zIndex: 1000,
                                                                            maxHeight: '300px',
                                                                            overflowY: 'auto'
                                                                        }}
                                                                    >
                                                                        {searchSuggestions.map((suggestion) => (
                                                                            <div
                                                                                key={suggestion.id}
                                                                                className="search-suggestion-item"
                                                                                onMouseDown={this.handleSuggestionMouseDown}
                                                                                onClick={() => this.handleSuggestionClick(suggestion.route)}
                                                                                style={{
                                                                                    padding: '12px 15px',
                                                                                    borderBottom: '1px solid #f5f5f5',
                                                                                    cursor: 'pointer',
                                                                                    transition: 'background-color 0.2s ease'
                                                                                }}
                                                                                onMouseEnter={(e) => {
                                                                                    e.target.style.backgroundColor = '#f8f9fa';
                                                                                }}
                                                                                onMouseLeave={(e) => {
                                                                                    e.target.style.backgroundColor = '#fff';
                                                                                }}
                                                                            >
                                                                                <div
                                                                                    style={{
                                                                                        fontWeight: '600',
                                                                                        color: '#333',
                                                                                        fontSize: '14px',
                                                                                        marginBottom: '4px',
                                                                                        pointerEvents: 'none' // Prevent child elements from interfering
                                                                                    }}
                                                                                >
                                                                                    {suggestion.title}
                                                                                </div>
                                                                                <div
                                                                                    style={{
                                                                                        color: '#666',
                                                                                        fontSize: '12px',
                                                                                        lineHeight: '1.4',
                                                                                        overflow: 'hidden',
                                                                                        textOverflow: 'ellipsis',
                                                                                        whiteSpace: 'nowrap',
                                                                                        pointerEvents: 'none'
                                                                                    }}
                                                                                >
                                                                                    {suggestion.description}
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>

                {/* Consulting Modal */}
                <ConsultingModal
                    isOpen={isConsultingModalOpen}
                    toggle={this.toggleConsultingModal}
                />
            </>
        )
    }
}