import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const cardRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [glowX, setGlowX] = useState(50);
    const [glowY, setGlowY] = useState(50);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation (subtle tilt)
        const rotateXValue = ((y - centerY) / centerY) * -8;
        const rotateYValue = ((x - centerX) / centerX) * 8;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);

        // Glow position
        setGlowX((x / rect.width) * 100);
        setGlowY((y / rect.height) * 100);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setGlowX(50);
        setGlowY(50);
    };

    const cardContent = (
        <motion.div
            ref={cardRef}
            className="project-card-3d"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.1s ease-out',
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                background: '#fff',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                cursor: 'pointer'
            }}
        >
            {/* Spotlight Glow */}
            <div
                className="card-spotlight"
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(39, 174, 96, 0.15) 0%, transparent 50%)`,
                    pointerEvents: 'none',
                    zIndex: 2,
                    opacity: rotateX !== 0 || rotateY !== 0 ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                }}
            />

            {/* Shine Effect */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(${105 + rotateY * 2}deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)`,
                    pointerEvents: 'none',
                    zIndex: 3,
                    opacity: rotateX !== 0 || rotateY !== 0 ? 0.6 : 0,
                    transition: 'opacity 0.3s ease'
                }}
            />

            {/* Image */}
            <div className="project-image" style={{
                aspectRatio: '4 / 3',
                overflow: 'hidden',
                background: '#f8f8f8'
            }}>
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        transform: `scale(${1 + Math.abs(rotateX + rotateY) * 0.005})`,
                        transition: 'transform 0.2s ease-out'
                    }}
                />
            </div>

            {/* Info */}
            <div style={{
                padding: '24px',
                textAlign: 'center',
                position: 'relative',
                zIndex: 4
            }}>
                <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    marginBottom: '12px',
                    color: 'var(--text-primary)'
                }}>{project.title}</h3>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    flexWrap: 'wrap'
                }}>
                    {project.tags && project.tags.slice(0, 2).map(tag => (
                        <span key={tag} style={{
                            fontSize: '0.7rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            padding: '6px 14px',
                            borderRadius: '50px',
                            background: 'linear-gradient(135deg, rgba(39, 174, 96, 0.1) 0%, rgba(39, 174, 96, 0.05) 100%)',
                            color: '#27ae60',
                            fontWeight: 600,
                            border: '1px solid rgba(39, 174, 96, 0.15)'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );

    if (project.internalLink) {
        return (
            <Link to={project.internalLink} style={{ textDecoration: 'none', display: 'block' }}>
                {cardContent}
            </Link>
        );
    }

    if (project.slug) {
        return (
            <Link to={`/projects/${project.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                {cardContent}
            </Link>
        );
    }

    return cardContent;
};

export default ProjectCard;
