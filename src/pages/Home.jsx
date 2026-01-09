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

            <section className="featured-projects" style={{ padding: '0 60px 100px', maxWidth: '1600px', margin: '0 auto' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: '40px'
                }}>
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: '400',
                        fontFamily: 'var(--font-display)',
                        color: 'var(--text-primary)'
                    }}>Featured Work</h2>

                    <a href="/projects" style={{
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        borderBottom: '1px solid var(--text-secondary)',
                        paddingBottom: '2px',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
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
        </main>
    );
};

export default Home;
