import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const containerRef = useRef(null);

    // Find Project
    const project = projects.find(p => p.slug === slug);

    // Find Next Project for navigation
    const currentIndex = projects.findIndex(p => p.slug === slug);
    const nextProject = projects[(currentIndex + 1) % projects.length];
    const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

    useEffect(() => {
        // Scroll to top on load
        window.scrollTo(0, 0);

        if (!project) return;

        const ctx = gsap.context(() => {
            // Hero Animations
            gsap.fromTo('.project-hero-content > *',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
            );

            gsap.fromTo('.project-hero-image',
                { y: 60, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
            );

            // Content Sections Fade Up
            gsap.utils.toArray('.detail-section').forEach(section => {
                gsap.fromTo(section,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 85%'
                        }
                    }
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, [slug, project]);

    if (!project) {
        return (
            <div className="page-container" style={{ textAlign: 'center', paddingTop: '150px' }}>
                <h1>Project not found</h1>
                <Link to="/projects" className="view-all-link">Back to Projects</Link>
            </div>
        );
    }

    return (
        <main className="project-detail-container" ref={containerRef}>

            {/* Navigation Bar */}
            <div className="detail-nav" style={{
                padding: '100px 60px 20px',
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link to="/projects" className="back-link" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                }}>
                    <FaArrowLeft /> Back to Projects
                </Link>
            </div>

            {/* Hero Section */}
            <header className="project-hero" style={{
                padding: '40px 60px 80px',
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '60px'
            }}>
                <div className="project-hero-content" style={{ maxWidth: '800px' }}>
                    <div style={{
                        display: 'flex',
                        gap: '12px',
                        marginBottom: '24px',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <span style={{
                            textTransform: 'uppercase',
                            fontSize: '0.85rem',
                            letterSpacing: '0.1em',
                            color: 'var(--text-secondary)',
                            border: '1px solid rgba(0,0,0,0.1)',
                            padding: '6px 12px',
                            borderRadius: '50px'
                        }}>
                            {project.category}
                        </span>
                        {project.tags.map(tag => (
                            <span key={tag} style={{
                                textTransform: 'uppercase',
                                fontSize: '0.85rem',
                                letterSpacing: '0.05em',
                                color: 'var(--text-secondary)',
                                opacity: 0.7
                            }}>
                                • {tag}
                            </span>
                        ))}
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        lineHeight: '1.1',
                        marginBottom: '30px',
                        fontFamily: 'var(--font-display)',
                        fontWeight: '600',
                        color: 'var(--text-primary)'
                    }}>
                        {project.title}
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        lineHeight: '1.6',
                        color: 'var(--text-secondary)',
                        marginBottom: '40px',
                        maxWidth: '650px'
                    }}>
                        {project.description}
                    </p>

                    <div className="project-links" style={{ display: 'flex', gap: '20px' }}>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                                className="project-link-btn"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '14px 28px',
                                    background: 'var(--text-primary)',
                                    color: 'var(--bg-color)',
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    fontWeight: '500'
                                }}>
                                <span>Visit Site</span>
                                <FaExternalLinkAlt size={12} />
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                                className="project-link-btn-secondary"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '14px 28px',
                                    background: 'transparent',
                                    color: 'var(--text-primary)',
                                    borderRadius: '50px',
                                    textDecoration: 'none',
                                    fontWeight: '500',
                                    border: '1px solid rgba(0,0,0,0.1)'
                                }}>
                                <FaGithub size={16} />
                                <span>Source Code</span>
                            </a>
                        )}
                    </div>
                </div>

                <div className="project-hero-image" style={{
                    width: '100%',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(0,0,0,0.05)'
                }}>
                    <img src={project.image} alt={project.title} style={{ width: '100%', display: 'block' }} />
                </div>
            </header>

            {/* Main Content Grid */}
            <div className="project-content" style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 60px 100px',
                display: 'grid',
                gridTemplateColumns: '2fr 1fr',
                gap: '80px'
            }}>

                {/* Left Column: Narrative */}
                <div className="content-main">

                    {project.longDescription && (
                        <section className="detail-section" style={{ marginBottom: '60px' }}>
                            <h3 style={styles.sectionTitle}>Overview</h3>
                            <p style={styles.paragraph}>{project.longDescription}</p>
                        </section>
                    )}

                    {project.challenge && (
                        <section className="detail-section" style={{ marginBottom: '60px' }}>
                            <h3 style={styles.sectionTitle}>The Challenge</h3>
                            <p style={styles.paragraph}>{project.challenge}</p>
                        </section>
                    )}

                    {project.solution && (
                        <section className="detail-section" style={{ marginBottom: '60px' }}>
                            <h3 style={styles.sectionTitle}>The Solution</h3>
                            <p style={styles.paragraph}>{project.solution}</p>
                        </section>
                    )}

                </div>

                {/* Right Column: Key Info & Stack */}
                <div className="content-sidebar" style={{ paddingTop: '10px' }}>

                    {(project.features && project.features.length > 0) && (
                        <section className="detail-section" style={{ marginBottom: '50px' }}>
                            <h3 style={styles.sidebarTitle}>Key Features</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {project.features.map((feature, idx) => (
                                    <li key={idx} style={{
                                        marginBottom: '12px',
                                        color: 'var(--text-secondary)',
                                        display: 'flex',
                                        alignItems: 'baseline',
                                        gap: '10px',
                                        fontSize: '0.95rem'
                                    }}>
                                        <span style={{ color: 'var(--text-primary)' }}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {(project.techStack && project.techStack.length > 0) && (
                        <section className="detail-section">
                            <h3 style={styles.sidebarTitle}>Tech Stack</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {project.techStack.map(tech => (
                                    <span key={tech} style={{
                                        padding: '8px 16px',
                                        background: 'rgba(0,0,0,0.03)',
                                        borderRadius: '6px',
                                        fontSize: '0.85rem',
                                        color: 'var(--text-primary)',
                                        border: '1px solid rgba(0,0,0,0.05)'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

            </div>

            {/* Next Project Footer */}
            <div className="next-project-footer" style={{
                borderTop: '1px solid rgba(0,0,0,0.05)',
                background: 'rgba(0,0,0,0.02)',
                padding: '80px 60px'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ textAlign: 'left' }}>
                        <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.1em' }}>Previous</span>
                        <Link to={`/projects/${prevProject.slug}`} style={styles.navLink}>
                            ← {prevProject.title}
                        </Link>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                        <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.1em' }}>Next Project</span>
                        <Link to={`/projects/${nextProject.slug}`} style={styles.navLink}>
                            {nextProject.title} →
                        </Link>
                    </div>
                </div>
            </div>

        </main>
    );
};

const styles = {
    sectionTitle: {
        fontSize: '1.5rem',
        marginBottom: '20px',
        fontWeight: '600',
        fontFamily: 'var(--font-display)',
        color: 'var(--text-primary)'
    },
    sidebarTitle: {
        fontSize: '1rem',
        marginBottom: '20px',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--text-primary)'
    },
    paragraph: {
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: 'var(--text-secondary)',
        marginBottom: '0'
    },
    navLink: {
        fontSize: '1.5rem',
        fontFamily: 'var(--font-display)',
        color: 'var(--text-primary)',
        textDecoration: 'none',
        fontWeight: '600',
        transition: 'opacity 0.2s'
    }
};

export default ProjectDetail;
