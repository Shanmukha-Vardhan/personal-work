import React, { useEffect } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Projects = ({ searchQuery = '' }) => {
    // Filter projects based on search query
    const filterProjects = (projList) => {
        return projList.filter(p => {
            if (!searchQuery) return true;
            const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesSearch;
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
