import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const cardContent = (
        <>
            <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="project-info">
                <h3>{project.title}</h3>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    marginTop: '12px'
                }}>
                    {project.tags && project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="project-tag">
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
        whileHover: {
            y: -12,
            transition: { duration: 0.3, ease: "easeOut" }
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
