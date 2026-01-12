import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="sidebar-close-btn" onClick={onClose}>&times;</button>

            <nav className="sidebar-nav" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <NavLink to="/avolve" className="nav-item" onClick={onClose}>
                    AVOLVE
                </NavLink>
                <NavLink to="/projects" className="nav-item" onClick={onClose}>
                    PROJECTS
                </NavLink>
                <NavLink to="/about" className="nav-item" onClick={onClose}>
                    ABOUT
                </NavLink>
                <NavLink to="/uses" className="nav-item" onClick={onClose}>
                    USES
                </NavLink>
                <NavLink to="/contact" className="nav-item" onClick={onClose}>
                    CONTACT
                </NavLink>
            </nav>
        </aside>
    );
};

export default Sidebar;
