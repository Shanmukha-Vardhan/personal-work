import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiMail, FiLinkedin, FiGithub, FiX } from 'react-icons/fi';

const FloatingCTA = () => {
    const [isOpen, setIsOpen] = useState(false);

    const contactLinks = [
        {
            icon: <FiMail size={18} />,
            label: 'Email',
            href: 'mailto:salapuvardhan4@gmail.com',
            color: '#ea4335'
        },
        {
            icon: <FiLinkedin size={18} />,
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/shanmukha-vardhan/',
            color: '#0077b5'
        },
        {
            icon: <FiGithub size={18} />,
            label: 'GitHub',
            href: 'https://github.com/Shanmukha-Vardhan',
            color: '#333'
        }
    ];

    return (
        <div style={{
            position: 'fixed',
            bottom: '32px',
            right: '32px',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '12px'
        }}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        style={{
                            background: '#ffffff',
                            borderRadius: '24px',
                            padding: '24px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                            border: '1px solid rgba(0,0,0,0.05)',
                            minWidth: '240px',
                            marginBottom: '8px'
                        }}
                    >
                        <div style={{
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            color: '#999',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            marginBottom: '16px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            Get in touch
                            <FiX 
                                size={14} 
                                style={{ cursor: 'pointer', opacity: 0.6 }} 
                                onClick={() => setIsOpen(false)}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {contactLinks.map((link, i) => (
                                <motion.a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        textDecoration: 'none',
                                        color: '#333',
                                        fontSize: '0.95rem',
                                        padding: '8px 12px',
                                        borderRadius: '12px',
                                        transition: 'background 0.2s ease',
                                        background: 'rgba(0,0,0,0.02)'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.02)'}
                                >
                                    <span style={{ color: link.color, display: 'flex' }}>{link.icon}</span>
                                    <span style={{ fontWeight: '400' }}>{link.label}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    background: isOpen ? '#000000' : '#ffffff',
                    color: isOpen ? '#ffffff' : '#000000',
                    border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '50px',
                    padding: '12px 24px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    letterSpacing: '0.1em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    fontFamily: "'Space Grotesk', sans-serif",
                    textTransform: 'uppercase'
                }}
            >
                {isOpen ? <FiX size={16} /> : <FiMessageSquare size={16} />}
                AVOLVE
            </motion.button>
        </div>
    );
};

export default FloatingCTA;
