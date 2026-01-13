import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    const cardContent = (
        <>
            <div className="project-image-wrapper">
                <motion.div
                    className="project-image"
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    <img src={project.image} alt={project.title} loading="lazy" />
                </motion.div>

                {/* Hover Overlay */}
                <motion.div
                    className="project-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '24px',
                        borderRadius: '16px'
                    }}
                >
                    <p style={{
                        color: 'white',
                        fontSize: '0.9rem',
                        lineHeight: 1.5,
                        marginBottom: '12px',
                        opacity: 0.9
                    }}>
                        {project.description}
                    </p>
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'white',
                        fontSize: '0.85rem',
                        fontWeight: 500
                    }}>
                        View Project
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </span>
                </motion.div>
            </div>

            <div className="project-info">
                <h3>{project.title}</h3>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    marginTop: '8px',
                    opacity: 0.6
                }}>
                    {project.tags && project.tags.slice(0, 2).map(tag => (
                        <span key={tag} style={{
                            fontSize: '0.7rem',
                            textTransform: 'uppercase',
                            border: '1px solid currentColor',
                            padding: '2px 6px',
                            borderRadius: '4px'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hover: { y: -8, transition: { duration: 0.3, ease: "easeOut" } }
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
            boxShadow: isHovered
                ? '0 20px 40px rgba(0,0,0,0.15)'
                : '0 4px 20px rgba(0,0,0,0.05)',
            transition: 'box-shadow 0.3s ease'
        }
    };

    // Priority: Internal Link (Custom Page) -> Slug (Detail Page) -> Link (External)
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

    // Fallback for no slug
    return (
        <motion.div {...cardProps}>
            {cardContent}
        </motion.div>
    );
};

export default ProjectCard;
