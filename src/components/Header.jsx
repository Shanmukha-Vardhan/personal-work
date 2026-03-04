import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = ({ searchQuery, onSearch, onToggleSidebar }) => {
    return (
        <header className="site-header" style={{
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid var(--border-color, rgba(255,255,255,0.05))'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '1200px',
                padding: '0 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
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
                        letterSpacing: '-0.02em'
                    }}>
                        Shanmukha Vardhan
                    </Link>
                </div>

                <nav style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '32px'
                }}>
                    <Link to="/avolve" className="nav-link desktop-only" style={{ color: 'var(--text-primary)', fontWeight: '600', textDecoration: 'none', fontSize: '0.95rem' }}>AVOLVE</Link>
                    <a href="#work" className="nav-link desktop-only" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>Work</a>
                    <a href="#services" className="nav-link desktop-only" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>Services</a>
                    <Link to="/about" className="nav-link desktop-only" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>About</Link>
                    <Link to="/contact" className="nav-link desktop-only" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem' }}>Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
