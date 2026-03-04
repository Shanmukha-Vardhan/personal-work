import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlassSurface from './GlassSurface';

const Header = ({ searchQuery, onSearch, onToggleSidebar }) => {
    return (
        <header style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '20px',
            paddingBottom: '20px',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            width: '100%',
            background: 'transparent'
        }}>
            <GlassSurface
                width="100%"
                height={70}
                borderRadius={35}
                opacity={0.8}
                blur={20}
                style={{
                    maxWidth: '1200px',
                    margin: '0 24px'
                }}
            >
                <div style={{
                    width: '100%',
                    padding: '0 32px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '100%'
                }}>
                    <div className="header-left" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <button className="mobile-menu-btn" onClick={onToggleSidebar}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                        <Link to="/" className="header-logo" style={{
                            textDecoration: 'none',
                            fontSize: '20px',
                            fontWeight: '700',
                            color: 'var(--text-primary)',
                            letterSpacing: '-0.02em',
                            margin: 0
                        }}>
                            Shanmukha Vardhan
                        </Link>
                    </div>

                    <nav style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '32px',
                        margin: 0
                    }}>
                        <Link to="/avolve" className="nav-link desktop-only" style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none', fontSize: '0.95rem' }}>AVOLVE</Link>
                        <Link to="/projects" className="nav-link desktop-only" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>Work</Link>
                        <a href="#services" className="nav-link desktop-only" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>Services</a>
                        <Link to="/about" className="nav-link desktop-only" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>About</Link>
                        <Link to="/contact" className="nav-link desktop-only" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>Contact</Link>
                    </nav>
                </div>
            </GlassSurface>
        </header>
    );
};

export default Header;
