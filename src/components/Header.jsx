import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({ searchQuery, onSearch, onToggleSidebar }) => {
    const { pathname } = useLocation();

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinkStyle = {
        color: '#222',
        textDecoration: 'none',
        fontSize: '0.95rem',
        fontWeight: '400',
        letterSpacing: '0.01em',
        transition: 'opacity 0.2s ease',
        cursor: 'pointer'
    };

    return (
        <header style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '28px 48px',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            width: '100%',
            background: '#ffffff',
            borderBottom: 'none'
        }}>
            {/* Mobile menu button */}
            <button className="mobile-menu-btn" onClick={onToggleSidebar}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            {/* Left nav */}
            <nav className="desktop-only" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '40px'
            }}>
                <a
                    href={pathname === '/' ? '#n-about' : '/'}
                    onClick={(e) => {
                        if (pathname === '/') {
                            e.preventDefault();
                            scrollTo('n-about');
                        }
                    }}
                    style={navLinkStyle}
                    onMouseEnter={(e) => e.target.style.opacity = '0.5'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                >about.</a>
                <a
                    href={pathname === '/' ? '#n-project' : '/projects'}
                    onClick={(e) => {
                        if (pathname === '/') {
                            e.preventDefault();
                            scrollTo('n-project');
                        }
                    }}
                    style={navLinkStyle}
                    onMouseEnter={(e) => e.target.style.opacity = '0.5'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                >projects.</a>
                <a
                    href={pathname === '/' ? '#n-life' : '/'}
                    onClick={(e) => {
                        if (pathname === '/') {
                            e.preventDefault();
                            scrollTo('n-life');
                        }
                    }}
                    style={navLinkStyle}
                    onMouseEnter={(e) => e.target.style.opacity = '0.5'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                >life.</a>
            </nav>

            {/* Right nav */}
            <nav className="desktop-only" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '40px'
            }}>
                <a
                    href={pathname === '/' ? '#n-contact' : '/contact'}
                    onClick={(e) => {
                        if (pathname === '/') {
                            e.preventDefault();
                            scrollTo('n-contact');
                        }
                    }}
                    style={navLinkStyle}
                    onMouseEnter={(e) => e.target.style.opacity = '0.5'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                >contact.</a>
                <a
                    href="/avolve"
                    style={navLinkStyle}
                    onMouseEnter={(e) => e.target.style.opacity = '0.5'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                >avolve.</a>
            </nav>
        </header>
    );
};

export default Header;
