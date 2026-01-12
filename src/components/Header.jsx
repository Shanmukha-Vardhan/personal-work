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
                <Link to="/" className="header-logo" style={{
                    textDecoration: 'none',
                    fontSize: '24px', // Reduced from 32px for elegance
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <motion.div
                        className="logo-container"
                        whileHover="hover"
                        initial="initial"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gridTemplateRows: '1fr',
                            overflow: 'hidden',
                            height: '1.2em'
                        }}
                    >
                        <motion.span
                            variants={{
                                initial: { y: 0, opacity: 1 },
                                hover: { y: -40, opacity: 0 }
                            }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                gridArea: '1 / 1 / 2 / 2',
                                fontWeight: '500',
                                letterSpacing: '0.02em',
                                textTransform: 'none' // Keep Korean natural
                            }}
                        >
                            샨무카 바르단
                        </motion.span>
                        <motion.span
                            variants={{
                                initial: { y: 40, opacity: 0 },
                                hover: { y: 0, opacity: 1 }
                            }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                gridArea: '1 / 1 / 2 / 2',
                                whiteSpace: 'nowrap',
                                fontWeight: '500',
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase'
                            }}
                        >
                            Shanmukha Vardhan
                        </motion.span>
                    </motion.div>
                </Link>
            </div>

            <div className="header-content">
                <nav>
                    <Link to="/avolve" className="nav-link desktop-only" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>AVOLVE</Link>
                    <Link to="/projects" className="nav-link desktop-only">PROJECTS</Link>
                    <Link to="/about" className="nav-link desktop-only">ABOUT</Link>
                    <Link to="/uses" className="nav-link desktop-only">USES</Link>
                    <Link to="/contact" className="nav-link desktop-only">CONTACT</Link>

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
