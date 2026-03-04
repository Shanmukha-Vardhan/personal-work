import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

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

    // Customize Featured Projects: Avolve (101), Left Unsaid (102), Gitam Attendance Calculator (11)
    const featuredProjects = projects.filter(p => [101, 102, 11].includes(p.id));

    return (
        <main className="home-container">
            <SEO
                title="Shanmukha Vardhan"
                description="Creative Developer & Designer building thoughtful digital experiences. Currently working on Avolve, a mental health companion with 500+ active users."
                url="https://shanmukha-dev.vercel.app"
            />
            {/* Show Hero only when no search query is present */}
            {!searchQuery && <Hero />}

            {/* Trust Strip */}
            {!searchQuery && (
                <section style={{ padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 24px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '40px',
                        textAlign: 'center'
                    }}>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', fontWeight: '500' }}>Worked with early-stage founders</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', fontWeight: '500' }}>Helping local businesses go online</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', fontWeight: '500' }}>Founder of AVOLVE Studio</div>
                    </div>
                </section>
            )}

            {/* Services Section */}
            {!searchQuery && (
                <section id="services" style={{ padding: '120px 0', maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        marginBottom: '60px',
                        color: 'var(--text-primary)'
                    }}>What I Build</h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '40px'
                    }}>
                        <div style={{ padding: '36px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--text-primary)', fontWeight: '600' }}>MVP Development</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>Build your startup idea into a working product.</p>
                        </div>
                        <div style={{ padding: '36px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--text-primary)', fontWeight: '600' }}>Business Websites</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>Modern websites for stores and local businesses.</p>
                        </div>
                        <div style={{ padding: '36px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--text-primary)', fontWeight: '600' }}>Landing Pages</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>Fast pages designed to convert visitors into customers.</p>
                        </div>
                    </div>
                </section>
            )}

            {/* Featured Work Section */}
            <section id="work" className="featured-projects reveal-fade-up" style={{ padding: '120px 0', maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: '60px'
                }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)'
                    }}>Selected Work</h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '60px'
                }}>
                    {featuredProjects.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </section>

            {/* AVOLVE Studio Section */}
            {!searchQuery && (
                <section style={{ padding: '120px 0', background: 'rgba(255, 255, 255, 0.02)' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '24px', color: 'var(--text-primary)' }}>AVOLVE Studio</h2>
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: 1.6, marginBottom: '32px' }}>
                            AVOLVE Studio is where I build and experiment with digital products.<br />
                            It focuses on helping founders turn ideas into real tools and platforms.
                        </p>
                        <a href="/avolve" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '16px 32px',
                            background: 'var(--text-primary)',
                            color: 'var(--bg-primary)',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '1rem',
                            transition: 'transform 0.2s ease, opacity 0.2s ease'
                        }}>
                            Explore AVOLVE →
                        </a>
                    </div>
                </section>
            )}

            {/* Process Section */}
            {!searchQuery && (
                <section style={{ padding: '120px 0', maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
                        <div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px', fontWeight: '600' }}>01</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--text-primary)', fontWeight: '600' }}>Idea</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>Understanding your idea and defining the product.</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px', fontWeight: '600' }}>02</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--text-primary)', fontWeight: '600' }}>Design</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>Structuring the user experience and interface.</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px', fontWeight: '600' }}>03</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--text-primary)', fontWeight: '600' }}>Build</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>Developing the product or website.</p>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px', fontWeight: '600' }}>04</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--text-primary)', fontWeight: '600' }}>Launch</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>Deploying and making it live.</p>
                        </div>
                    </div>
                </section>
            )}

            {/* Call to Action Section */}
            <section className="cta-section reveal-scale" style={{
                padding: '140px 0',
                maxWidth: '1200px',
                margin: '0 auto',
                paddingLeft: '24px',
                paddingRight: '24px',
                textAlign: 'center'
            }}>
                <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)', lineHeight: 1.1 }}>
                    Have an idea? Let’s build it.
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', marginBottom: '40px', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 40px auto' }}>
                    I work with startups and businesses looking to launch fast.
                </p>
                <a href="/contact" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '16px 40px',
                    background: 'var(--text-primary)',
                    color: 'var(--bg-primary)',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    transition: 'transform 0.2s ease, opacity 0.2s ease'
                }}>
                    Start a Project
                </a>
            </section>
        </main>
    );
};

export default Home;
