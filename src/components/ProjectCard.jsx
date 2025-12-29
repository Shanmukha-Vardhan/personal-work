import React from 'react';

const ProjectCard = ({ project }) => {
    const CardContent = () => (
        <>
            <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="project-info">
                <h3>{project.title}</h3>
            </div>
        </>
    );

    if (project.link) {
        return (
            <a
                href={project.link}
                className="project-card"
                target={project.link === '#' ? '_self' : '_blank'}
                rel="noreferrer"
                onClick={(e) => {
                    if (project.linkAction === 'alert') {
                        e.preventDefault();
                        alert(project.linkText + ' available on YouTube');
                    }
                }}
            >
                <CardContent />
            </a>
        );
    }

    return (
        <div className="project-card">
            <CardContent />
        </div>
    );
};

export default ProjectCard;
