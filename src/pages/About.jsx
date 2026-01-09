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

                <div className="stats-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '40px',
                    margin: '60px 0',
                    textAlign: 'left'
                }}>
                    <div>
                        <span style={{ display: 'block', fontSize: '3rem', fontWeight: '700', color: 'var(--text-primary)' }}>15+</span>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Projects Completed</span>
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '3rem', fontWeight: '700', color: 'var(--text-primary)' }}>3+</span>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Years Experience</span>
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '3rem', fontWeight: '700', color: 'var(--text-primary)' }}>100%</span>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Client Satisfaction</span>
                    </div>
                </div>

                <div className="learning-section" style={{ marginBottom: '60px' }}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '400',
                        marginBottom: '20px',
                        fontFamily: 'var(--font-display)',
                        color: 'var(--text-primary)'
                    }}>Currently Exploring</h3>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        background: 'rgba(0,0,0,0.02)',
                        padding: '20px',
                        borderRadius: '12px',
                        border: '1px solid rgba(0,0,0,0.05)'
                    }}>
                        <div style={{ fontSize: '2rem' }}>📐</div>
                        <div>
                            <h4 style={{ margin: 0, fontWeight: '600', color: 'var(--text-primary)' }}>Advanced Three.js & WebGL</h4>
                            <p style={{ margin: '4px 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Pushing the boundaries of 3D web experiences.</p>
                        </div>
                    </div>
                </div>

                <div className="skills-section">
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: '400',
                        marginBottom: '20px',
                        fontFamily: 'var(--font-display)',
                        color: 'var(--text-primary)'
                    }}>Expertise</h3>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                        {['JavaScript (ES6+)', 'React', 'Node.js', 'CSS/SCSS', 'UI/UX Design', 'Git', 'Figma', 'Next.js', 'TypeScript', 'Tailwind CSS'].map(skill => (
                            <span key={skill} style={{
                                padding: '8px 16px',
                                background: 'rgba(0,0,0,0.03)',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                color: 'var(--text-primary)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                transition: 'all 0.2s'
                            }}
                                className="skill-tag" // Class for hover effect if needed in CSS
                            >
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
