import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <main className="about-container" style={{ padding: '40px 60px', minHeight: '100vh', paddingTop: '100px', maxWidth: '1000px', margin: '0 auto' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: '300',
                    marginBottom: '32px',
                    fontFamily: 'var(--font-display)',
                    color: 'var(--text-primary)'
                }}>About Me</h1>

                <div className="about-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                    <p style={{ marginBottom: '24px' }}>
                        Hello! I'm Shanmukha Vardhan, a passionate developer and designer who loves building things for the web.
                        I specialize in creating high-quality web applications that not only work great but look amazing too.
                    </p>

                    <p style={{ marginBottom: '24px' }}>
                        My journey began with a curiosity for how things work on the internet, which quickly turned into a career
                        fueled by coffee and code. I enjoy working with the latest technologies like React, Node.js, and modern CSS
                        to bring ideas to life.
                    </p>

                    <p style={{ marginBottom: '24px' }}>
                        When I'm not coding, you can find me exploring new design trends, tweaking my developer setup, or
                        learning about the next big thing in tech.
                    </p>
                </div>

                <div className="skills-section" style={{ marginTop: '60px' }}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '400',
                        marginBottom: '20px',
                        fontFamily: 'var(--font-display)',
                        color: 'var(--text-primary)'
                    }}>Expertise</h3>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                        {['JavaScript (ES6+)', 'React', 'Node.js', 'CSS/SCSS', 'UI/UX Design', 'Git', 'Figma'].map(skill => (
                            <span key={skill} style={{
                                padding: '8px 16px',
                                background: 'rgba(0,0,0,0.03)',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                color: 'var(--text-primary)',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </main>
    );
};

export default About;
