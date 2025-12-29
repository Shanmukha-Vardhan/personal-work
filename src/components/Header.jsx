import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = ({ searchQuery, onSearch, onToggleSidebar }) => {
    return (
        <header className="site-header">
            <div className="header-left">
                <button className="mobile-menu-btn" onClick={onToggleSidebar}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <Link to="/" className="header-logo">Shanmukha Vardhan</Link>
            </div>

            <div className="header-content">
                <nav>
                    <Link to="/samples" className="nav-link desktop-only">SAMPLES</Link>
                    <Link to="/tools" className="nav-link desktop-only">TOOLS</Link>
                    <Link to="/personal-projects" className="nav-link desktop-only">PERSONAL</Link>

                    <div className="search-container">
                        <input
                            type="text"
                            value={searchQuery || ''}
                            placeholder="Search projects..."
                            className="search-input"
                            onChange={(e) => onSearch(e.target.value)}
                        />
                        <div className="cmd-hint">⌘K</div>
                    </div>

                    <a href="mailto:salapuvardhan4@gmail.com" className="nav-button desktop-only">Get in touch</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
