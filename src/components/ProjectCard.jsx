import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
    const cardContent = (
        <>
            <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="project-info">
                <h3>{project.title}</h3>
            </div>
        </>
    );

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hover: { y: -10, transition: { duration: 0.3, ease: "easeOut" } }
    };

    if (project.link) {
        return (
            <motion.a
                href={project.link}
                className="project-card"
                target={project.link === '#' ? '_self' : '_blank'}
                rel="noreferrer"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                onClick={(e) => {
                    if (project.linkAction === 'alert') {
                        e.preventDefault();
                        alert(project.linkText + ' available on YouTube');
                    }
                }}
            >
                {cardContent}
            </motion.a>
        );
    }

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
