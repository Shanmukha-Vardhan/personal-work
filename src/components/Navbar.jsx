import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="nav-content">
                <div className="nav-links">
                    <Link to="/" className={`logo ${location.pathname === '/' ? 'active' : ''}`}>
                        Shanmukah Vardhan
                    </Link>
                    <Link to="/tools" className={`nav-link ${location.pathname === '/tools' ? 'active' : ''}`}>
                        Tools
                    </Link>
                </div>
                <a href="mailto:salapuvardhan4@gmail.com" className="contact-link">Get in Touch</a>
            </div>
        </nav>
    );
};

export default Navbar;
