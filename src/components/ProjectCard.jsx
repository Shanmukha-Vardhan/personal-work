import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
    return (
        <div className={`project-card ${project.draft ? 'draft-card' : ''}`}>
            <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                {project.draft && (
                    <div className="draft-badge">DRAFT</div>
                )}
            </div>
            <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                    {project.link && (
                        <a
                            href={project.link}
                            className="project-link-btn"
                            target={project.link === '#' ? '_self' : '_blank'}
                            rel="noreferrer"
                            onClick={(e) => {
                                if (project.linkAction === 'alert') {
                                    e.preventDefault();
                                    alert(project.linkText + ' available on YouTube');
                                }
                            }}
                        >
                            {project.linkText || 'View Project'}
                        </a>
                    )}
                    {project.github && (
                        <a href={project.github} className="project-link-btn github-btn" target="_blank" rel="noreferrer">GitHub</a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
