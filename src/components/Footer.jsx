import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Shanmukha Vardhan</h4>
                    <p>Crafting digital experiences with precision and passion.</p>
                </div>

                <div className="footer-section">
                    <h4>Connect</h4>
                    <ul className="footer-links">
                        <li><a href="https://github.com/Shanmukha-Vardhan" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/shanmukha-vardhan/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="mailto:salapuvardhan4@gmail.com">Email</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Explore</h4>
                    <ul className="footer-links">
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/uses">Uses</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Shanmukha Vardhan. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
