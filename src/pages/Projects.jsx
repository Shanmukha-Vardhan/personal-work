import React, { useEffect } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Projects = ({ searchQuery = '' }) => {
    const [activeCategory, setActiveCategory] = React.useState('All');

    // Filter projects based on search query AND category
    const filterProjects = (projList) => {
        return projList.filter(p => {
            const matchesSearch = !searchQuery ||
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory = activeCategory === 'All' ||
                (activeCategory === 'Samples' && p.category === 'sample') ||
                (activeCategory === 'Tools' && p.category === 'tool') ||
                (activeCategory === 'Personal' && p.category === 'personal');

            return matchesSearch && matchesCategory;
        });
    };

    const filteredProjects = filterProjects(projects);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="projects-page-container" style={{ padding: '40px 60px', minHeight: '100vh', paddingTop: '100px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '60px' }}
            >
                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: '300',
                    marginBottom: '16px',
                    fontFamily: 'var(--font-display)',
                    color: 'var(--text-primary)'
                }}>All Projects</h1>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.2rem',
                    maxWidth: '600px'
                }}>
                    A curated collection of my work, ranging from web applications to experimental designs.
                </p>

                <div className="category-filter" style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
                    {['All', 'Samples', 'Tools', 'Personal'].map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                borderBottom: activeCategory === category ? '2px solid var(--text-primary)' : '2px solid transparent',
                                color: activeCategory === category ? 'var(--text-primary)' : 'var(--text-secondary)',
                                padding: '8px 0',
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </motion.div>

            <div className="project-grid">
                {filteredProjects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}

                {filteredProjects.length === 0 && (
                    <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: '40px', width: '100%' }}>
                        No projects found matching "{searchQuery}"
                    </p>
                )}
            </div>
        </main>
    );
};

export default Projects;
