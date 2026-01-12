import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="sidebar-close-btn" onClick={onClose}>&times;</button>
            <div className="sidebar-header">
                <NavLink to="/" className="logo" onClick={onClose} style={{
                    textDecoration: 'none',
                    fontSize: '20px',
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
                                textTransform: 'none'
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
