import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-title"
                >
                    Designing the <br />
                    <span className="highlight">Unimagined.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="hero-subtitle"
                >
                    Shanmukha Vardhan — Creative Developer & Designer.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hero-status"
                >
                    <span className="status-dot"></span>
                    Available for new projects
                </motion.div>
            </div>

            <div className="hero-visual">
                {/* Abstract shape or visual can go here */}
                <div className="gradient-sphere"></div>
            </div>
        </section>
    );
};

export default Hero;
