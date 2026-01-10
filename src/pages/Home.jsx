import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Hero from '../components/Hero';

const Home = ({ category, searchQuery = '' }) => {
    // Filter projects based on category AND search query
    const filterProjects = (projList) => {
        return projList.filter(p => {
            const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesSearch;
        });
    };

    if (category) {
        const categoryProjects = projects.filter(p => p.category === category);
        const filteredProjects = filterProjects(categoryProjects);

        return (
            <main className="home-container">
                <section className="projects single-category">
                    <div className="project-grid">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map(project => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))
                        ) : (
                            <p style={{ color: 'var(--text-secondary)' }}>
                                No projects found matching "{searchQuery}"
                            </p>
                        )}
                    </div>
                </section>
            </main>
        );
    }

    // Get top 3 featured projects (first 3 for now)
    const featuredProjects = projects.slice(0, 3);

    return (
        <main className="home-container">
            {/* Show Hero only when no search query is present */}
            {!searchQuery && <Hero />}

            {/* Featured Work Section - reveal on scroll */}
            <section
                className="featured-projects reveal-fade-up"
                style={{ padding: '0 60px 100px', maxWidth: '1600px', margin: '0 auto' }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: '40px'
                }}>
                    <h2 className="section-title" style={{
                        fontSize: '2.5rem',
                        fontWeight: '400',
                        fontFamily: 'var(--font-display)',
                        color: 'var(--text-primary)'
                    }}>Featured Work</h2>

                    <a href="/projects" className="view-all-link" style={{
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        borderBottom: '1px solid var(--text-secondary)',
                        paddingBottom: '2px',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        transition: 'all 0.3s ease'
                    }}>
                        View All Projects
                    </a>
                </div>

                <div className="project-grid">
                    {featuredProjects.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </section>

            {/* Technologies Section - reveal on scroll */}
            <section
                className="trusted-by reveal-fade-up"
                style={{ padding: '0 60px 100px', maxWidth: '1600px', margin: '0 auto', textAlign: 'center' }}
            >
                <p style={{
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    fontSize: '0.8rem',
                    letterSpacing: '0.15em',
                    marginBottom: '50px'
                }}>Technologies & Tools I Use</p>
                <div className="tech-logos" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '80px',
                    opacity: 0.6,
                    filter: 'grayscale(100%)',
                    flexWrap: 'wrap',
                    transition: 'all 0.5s ease'
                }}>
                    {['REACT', 'NODE.JS', 'FIGMA', 'NEXT.JS', 'TYPESCRIPT'].map((tech, index) => (
                        <span
                            key={tech}
                            className="tech-item"
                            style={{
                                fontSize: '1.6rem',
                                fontWeight: '700',
                                fontFamily: 'var(--font-display)',
                                color: 'var(--text-primary)',
                                transition: 'all 0.3s ease',
                                transitionDelay: `${index * 0.05}s`
                            }}
                        >{tech}</span>
                    ))}
                </div>
            </section>

            {/* Call to Action Section */}
            <section
                className="cta-section reveal-scale"
                style={{
                    padding: '120px 60px',
                    maxWidth: '1200px',
                    margin: '0 auto 100px',
                    textAlign: 'center'
                }}
            >
                <h2 style={{
                    fontSize: '3.5rem',
                    fontWeight: '300',
                    fontFamily: 'var(--font-display)',
                    color: 'var(--text-primary)',
                    marginBottom: '24px',
                    lineHeight: '1.2'
                }}>
                    Let's build something<br />
                    <span style={{ fontStyle: 'italic', fontWeight: '400' }}>extraordinary</span> together.
                </h2>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem',
                    marginBottom: '40px',
                    maxWidth: '500px',
                    margin: '0 auto 40px'
                }}>
                    Have an exciting project in mind? I'd love to hear about it.
                </p>
                <a
                    href="/contact"
                    className="cta-button"
                    style={{
                        display: 'inline-block',
                        padding: '18px 48px',
                        background: 'var(--text-primary)',
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        fontWeight: '500',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        borderRadius: '50px',
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                >
                    Get in Touch
                </a>
            </section>
        </main>
    );
};

export default Home;
