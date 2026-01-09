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

    return (
        <main className="home-container">
            {/* Show Hero only when no search query is present to keep it clean */}
            {!searchQuery && <Hero />}

            <div className="all-projects">
                <div className="project-grid">
                    {/* Combine all projects or filter if search is active */}
                    {filterProjects(projects).map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}

                    {filterProjects(projects).length === 0 && (
                        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: '40px', width: '100%' }}>
                            No projects found.
                        </p>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Home;
