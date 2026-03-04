import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer" style={{ padding: '60px 0', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
                <div>
                    <h4 style={{ fontSize: '1.2rem', margin: '0 0 12px 0', color: 'var(--text-primary)', fontWeight: '600' }}>Shanmukha Vardhan</h4>
                    <p style={{ margin: '0 0 4px 0', color: 'var(--text-secondary)', fontSize: '1rem' }}>Freelance Developer</p>
                    <p style={{ margin: '0', color: 'var(--text-secondary)', fontSize: '1rem' }}>Founder — AVOLVE Studio</p>
                </div>

                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                    <a href="https://github.com/Shanmukha-Vardhan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease', fontWeight: '500' }}>GitHub</a>
                    <a href="https://www.linkedin.com/in/shanmukha-vardhan/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease', fontWeight: '500' }}>LinkedIn</a>
                    <a href="mailto:salapuvardhan4@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease', fontWeight: '500' }}>Email</a>
                </div>
            </div>

            <div style={{ maxWidth: '1200px', margin: '40px auto 0 auto', padding: '0 24px', color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.85rem' }}>
                <p style={{ margin: 0 }}>&copy; {currentYear} Shanmukha Vardhan.</p>
            </div>
        </footer>
    );
};

export default Footer;
