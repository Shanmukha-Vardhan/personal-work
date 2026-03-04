import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer" style={{
            padding: '60px 0',
            borderTop: '1px solid rgba(0, 0, 0, 0.06)'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 24px',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '40px',
                alignItems: 'flex-start'
            }}>
                <div>
                    <p style={{
                        margin: 0,
                        color: 'var(--text-secondary)',
                        fontSize: '0.85rem'
                    }}>
                        Crafted between focus sessions and lots of coffee ☕
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                    <a href="https://github.com/Shanmukha-Vardhan" target="_blank" rel="noopener noreferrer" style={{
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        transition: 'color 0.2s ease'
                    }}>GitHub</a>
                    <a href="https://www.linkedin.com/in/shanmukha-vardhan/" target="_blank" rel="noopener noreferrer" style={{
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        transition: 'color 0.2s ease'
                    }}>LinkedIn</a>
                    <a href="mailto:salapuvardhan4@gmail.com" style={{
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        transition: 'color 0.2s ease'
                    }}>Email</a>
                </div>
            </div>

            <div style={{
                maxWidth: '1200px',
                margin: '30px auto 0 auto',
                padding: '0 24px',
                color: 'rgba(0, 0, 0, 0.3)',
                fontSize: '0.8rem'
            }}>
                <p style={{ margin: 0 }}>&copy; {currentYear} Shanmukha Vardhan.</p>
            </div>
        </footer>
    );
};

export default Footer;
