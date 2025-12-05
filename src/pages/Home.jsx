import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import TechFilter from '../components/TechFilter';

const Home = ({ category, searchQuery = '' }) => {
    const [selectedTech, setSelectedTech] = useState(null);

    // Filter projects based on category AND search query AND selected tech
    const filterProjects = (projList) => {
        return projList.filter(p => {
            const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTech = selectedTech ? (p.tags && p.tags.includes(selectedTech)) : true;

            return matchesSearch && matchesTech;
        });
    };

    const renderSection = (title, cat) => {
        const sectionProjects = projects.filter(p => p.category === cat);
        const searchedProjects = filterProjects(sectionProjects);

        if (searchedProjects.length === 0) return null;

        return (
            <section className="projects-section" id={cat}>
                <h2 className="section-title">{title}</h2>
                <div className="project-grid">
                    {searchedProjects.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </section>
        );
    };

    if (category) {
        const categoryProjects = projects.filter(p => p.category === category);
        const filteredProjects = filterProjects(categoryProjects);

        const getTitle = () => {
            if (category === 'sample') return 'Make it yours (samples)';
            if (category === 'personal') return 'Personal Projects';
            if (category === 'tool') return 'Tools';
            return 'Selected Work';
        };

        return (
            <main className="home-container">
                <TechFilter selectedTech={selectedTech} onSelectTech={setSelectedTech} />
                <section className="projects single-category">
                    <div className="section-header">
                        <h2 className="section-title">{getTitle()}</h2>
                    </div>
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
                                No projects found matching "{searchQuery}" {selectedTech && `with tag ${selectedTech}`}
                            </p>
                        )}
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main className="home-container">
            <section className="hero-simple">
                <h1>Shanmukha Vardhan</h1>
                <p
                    className="subtitle"
                    style={{ fontSize: '24px', color: 'var(--text-secondary)', maxWidth: '600px' }}
                >
                    Crafting digital experiences with precision and passion.
                </p>
            </section>

            <TechFilter selectedTech={selectedTech} onSelectTech={setSelectedTech} />

            <div className="all-projects">
                {renderSection('Make it yours (Samples)', 'sample')}
                {renderSection('Tools', 'tool')}
                {renderSection('Personal Projects', 'personal')}

                {/* Show message if search yields no results across all sections */}
                {filterProjects(projects).length === 0 && (
                    <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: '40px' }}>
                        No projects found matching "{searchQuery}" {selectedTech && `with tag ${selectedTech}`}
                    </p>
                )}
            </div>
        </main>
    );
};

export default Home;
