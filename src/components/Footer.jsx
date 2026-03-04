import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '40px 48px',
            borderTop: '1px solid #e8e8e8',
            background: '#ffffff'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '24px'
            }}>
                <p style={{
                    margin: 0,
                    color: '#999',
                    fontSize: '0.85rem',
                    fontWeight: '400'
                }}>
                    Crafted between focus sessions and lots of coffee ☕
                </p>

                <nav style={{
                    display: 'flex',
                    gap: '32px',
                    alignItems: 'center'
                }}>
                    <a href="#n-about" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>about.</a>
                    <a href="#n-project" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>projects.</a>
                    <a href="#n-life" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>life.</a>
                    <a href="#n-contact" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>contact.</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
