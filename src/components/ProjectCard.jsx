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
        hover: { y: -10, transition: { duration: 0.3, ease: "easeOut" } }
    };

    // If slug exists, link to detail page.
    if (project.slug) {
        return (
            <Link to={`/projects/${project.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <motion.div
                    className="project-card"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover="hover"
                >
                    {cardContent}
                </motion.div>
            </Link>
        );
    }

    // Fallback for no slug (shouldn't happen with updated data)
    return (
        <motion.div
            className="project-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
        >
            {cardContent}
        </motion.div>
    );
};

export default ProjectCard;
