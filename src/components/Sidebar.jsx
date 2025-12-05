import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="sidebar-close-btn" onClick={onClose}>&times;</button>
            <div className="sidebar-header">
                <NavLink to="/" className="logo" onClick={onClose}>
                    Shanmukha Vardhan
                </NavLink>
            </div>

            <nav className="sidebar-nav">
                <div className="nav-group">
                    <NavLink to="/samples" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
                        Samples
                    </NavLink>
                </div>

                <div className="nav-group">
                    <NavLink to="/tools" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
                        Tools
                    </NavLink>
                </div>

                <div className="nav-group">
                    <NavLink to="/personal-projects" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
                        Personal Projects
                    </NavLink>
                </div>
            </nav>

            <div className="sidebar-footer">
                <a href="mailto:salapuvardhan4@gmail.com" className="contact-link">
                    Get in Touch
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
