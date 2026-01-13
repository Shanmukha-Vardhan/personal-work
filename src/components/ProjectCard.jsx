import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardContent = (
        <>
            <div className="project-image-wrapper" style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px' }}>
                <motion.div
                    className="project-image"
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{ aspectRatio: '4/3', width: '100%', background: '#f5f5f5' }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </motion.div>

                {/* Premium Dark Overlay - Reveals Data */}
                <motion.div
                    className="project-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '24px',
                        pointerEvents: 'none' // Allows click through
                    }}
                >
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <p style={{
                            color: 'rgba(255, 255, 255, 0.95)',
                            fontSize: '0.95rem',
                            lineHeight: 1.5,
                            marginBottom: '16px',
                            fontWeight: 400,
                            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}>
                            {project.description}
                        </p>

                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: '#4ade80', // Bright green for contrast on dark
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            letterSpacing: '0.02em'
                        }}>
                            View Case Study
                            <motion.span
                                animate={{ x: isHovered ? 4 : 0 }}
                                transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                            >
                                →
                            </motion.span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Info Section - Always Visible */}
            <div className="project-info" style={{ padding: '20px 0', textAlign: 'center', background: 'transparent' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '10px', color: 'var(--text-primary)' }}>
                    {project.title}
                </h3>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    flexWrap: 'wrap'
                }}>
                    {project.tags && project.tags.slice(0, 2).map(tag => (
                        <span key={tag} style={{
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            padding: '6px 14px',
                            borderRadius: '50px',
                            background: 'rgba(39, 174, 96, 0.08)',
                            color: '#27ae60',
                            fontWeight: 600
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    };

    const cardProps = {
        className: "project-card",
        variants: cardVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        whileHover: "hover",
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        style: {
            cursor: 'pointer',
            position: 'relative',
            zIndex: 1
        }
    };

    if (project.internalLink) {
        return (
            <Link to={project.internalLink} style={{ textDecoration: 'none', display: 'block' }}>
                <motion.div {...cardProps}>
                    {cardContent}
                </motion.div>
            </Link>
        );
    }

    if (project.slug) {
        return (
            <Link to={`/projects/${project.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <motion.div {...cardProps}>
                    {cardContent}
                </motion.div>
            </Link>
        );
    }

    return (
        <motion.div {...cardProps}>
            {cardContent}
        </motion.div>
    );
};

export default ProjectCard;
