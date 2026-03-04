import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

const Home = ({ category, searchQuery = '' }) => {

    // If searching or filtering by category, show filtered project grid
    if (category || searchQuery) {
        const filterProjects = (projList) => {
            return projList.filter(p => {
                const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    p.description.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesCategory = category ? p.category === category : true;
                return matchesSearch && matchesCategory;
            });
        };

        const filteredProjects = filterProjects(projects);

        return (
            <main className="home-container">
                <section className="projects single-category" style={{ padding: '40px 24px', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                        gap: '40px'
                    }}>
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map(project => (
                                <Link
                                    key={project.id}
                                    to={`/projects/${project.slug}`}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <div style={{
                                        padding: '24px',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(0, 0, 0, 0.06)',
                                        background: '#fafafa',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px' }}>{project.title}</h3>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{project.description}</p>
                                    </div>
                                </Link>
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

    // Best 4 projects — curated, not comprehensive
    const selectedProjects = projects.filter(p => [101, 102, 11, 1].includes(p.id));

    return (
        <main className="home-container">
            <SEO
                title="Shanmukha Vardhan"
                description="Developer & Designer building thoughtful digital experiences. Founder of AVOLVE Studio."
                url="https://shanmukha-dev.vercel.app"
            />

            {/* ===== HERO ===== */}
            <Hero />

            {/* ===== ABOUT — short & punchy ===== */}
            <section id="about" style={{
                padding: '100px 24px',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                <div style={{
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: 'var(--text-secondary)',
                    marginBottom: '24px'
                }}>
                    01/ About
                </div>
                <p style={{
                    fontSize: '1.35rem',
                    lineHeight: 1.7,
                    color: 'var(--text-primary)',
                    fontWeight: '400',
                    marginBottom: '24px'
                }}>
                    Developer and designer who builds products that feel right — clean, functional,
                    and always a little bit thoughtful. I focus on turning ideas into real,
                    working software that people actually use.
                </p>
                <p style={{
                    fontSize: '1.35rem',
                    lineHeight: 1.7,
                    color: 'var(--text-primary)',
                    fontWeight: '400'
                }}>
                    I build MVPs for early-stage startups, modern websites for businesses,
                    and my own products through{' '}
                    <strong style={{ fontWeight: '600' }}>AVOLVE Studio</strong>.
                </p>
            </section>

            {/* ===== CURRENTLY ===== */}
            <section style={{
                padding: '0 24px 100px',
                maxWidth: '800px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
            }}>
                <div style={{
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: 'var(--text-secondary)',
                    marginBottom: '12px'
                }}>
                    02/ Currently
                </div>
                <div style={{
                    fontSize: '1.15rem',
                    color: 'var(--text-primary)',
                    fontWeight: '500'
                }}>
                    Freelance Developer — building for startups & businesses
                </div>
                <div style={{
                    fontSize: '1.15rem',
                    color: 'var(--text-primary)',
                    fontWeight: '500'
                }}>
                    Founder of AVOLVE Studio
                </div>
            </section>

            {/* ===== SELECTED PROJECTS ===== */}
            <section id="work" className="reveal-fade-up" style={{
                padding: '100px 24px',
                maxWidth: '1200px',
                margin: '0 auto',
                borderTop: '1px solid rgba(0, 0, 0, 0.06)'
            }}>
                <div style={{
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: 'var(--text-secondary)',
                    marginBottom: '60px',
                    textAlign: 'center'
                }}>
                    selected projects.
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0'
                }}>
                    {selectedProjects.map((project, index) => (
                        <Link
                            key={project.id}
                            to={project.slug === 'avolve-app' ? '/avolve' : `/projects/${project.slug}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <div className="selected-project-row" style={{
                                display: 'grid',
                                gridTemplateColumns: '60px 1fr',
                                gap: '40px',
                                padding: '48px 0',
                                borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                                alignItems: 'start',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.paddingLeft = '16px';
                                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.01)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.paddingLeft = '0';
                                    e.currentTarget.style.background = 'transparent';
                                }}
                            >
                                <div style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--text-secondary)',
                                    fontWeight: '600',
                                    paddingTop: '4px'
                                }}>
                                    0{index + 1}/
                                </div>

                                <div>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '600',
                                        marginBottom: '12px',
                                        color: 'var(--text-primary)',
                                        fontFamily: 'var(--font-display)'
                                    }}>
                                        {project.title}
                                    </h3>
                                    <p style={{
                                        fontSize: '1.05rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.6,
                                        maxWidth: '600px',
                                        margin: 0
                                    }}>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Work Link */}
                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <Link to="/projects" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '16px 32px',
                        background: 'transparent',
                        color: 'var(--text-primary)',
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '0.95rem',
                        transition: 'all 0.2s ease',
                        letterSpacing: '0.02em'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--text-primary)';
                            e.currentTarget.style.color = 'var(--bg-color)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'var(--text-primary)';
                        }}
                    >
                        View All Work →
                    </Link>
                </div>
            </section>

            {/* ===== LIFE — personality section ===== */}
            <section style={{
                padding: '100px 24px',
                maxWidth: '800px',
                margin: '0 auto',
                borderTop: '1px solid rgba(0, 0, 0, 0.06)'
            }}>
                <div style={{
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: 'var(--text-secondary)',
                    marginBottom: '32px'
                }}>
                    beyond work
                </div>

                <p style={{
                    fontSize: '1.15rem',
                    lineHeight: 1.8,
                    color: 'var(--text-secondary)',
                    marginBottom: '40px'
                }}>
                    While work happens, my time also goes into doing a bunch of other things — things that
                    make the mix very fun!
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '16px'
                }}>
                    {[
                        '🎵  Music & concerts',
                        '☕  Too much coffee',
                        '📚  Reading when I can',
                        '🎮  Gaming late nights',
                        '✈️  Exploring new places',
                        '💡  Building random ideas'
                    ].map((item, i) => (
                        <div key={i} style={{
                            padding: '20px 24px',
                            background: 'rgba(0, 0, 0, 0.02)',
                            borderRadius: '12px',
                            border: '1px solid rgba(0, 0, 0, 0.04)',
                            fontSize: '1rem',
                            color: 'var(--text-primary)',
                            fontWeight: '500',
                            transition: 'all 0.2s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.04)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.02)';
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== CTA — Contact ===== */}
            <section className="reveal-scale" style={{
                padding: '120px 24px',
                maxWidth: '800px',
                margin: '0 auto',
                textAlign: 'center',
                borderTop: '1px solid rgba(0, 0, 0, 0.06)'
            }}>
                <div style={{
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: 'var(--text-secondary)',
                    marginBottom: '32px'
                }}>
                    always up for conversations.
                </div>

                <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    fontWeight: '700',
                    marginBottom: '40px',
                    color: 'var(--text-primary)',
                    lineHeight: 1.1,
                    fontFamily: 'var(--font-display)'
                }}>
                    Let's chat, shall we?
                </h2>

                <div style={{
                    display: 'flex',
                    gap: '16px',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <a href="mailto:salapuvardhan4@gmail.com" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '16px 32px',
                        background: 'var(--text-primary)',
                        color: 'var(--bg-color)',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '1rem',
                        transition: 'transform 0.2s ease, opacity 0.2s ease'
                    }}>
                        Say Hello →
                    </a>

                    <Link to="/contact" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '16px 32px',
                        background: 'transparent',
                        color: 'var(--text-primary)',
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '1rem',
                        transition: 'all 0.2s ease'
                    }}>
                        Start a Project
                    </Link>
                </div>

                {/* Contact Details */}
                <div style={{
                    marginTop: '60px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '24px',
                    textAlign: 'center'
                }}>
                    <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '8px' }}>Email</div>
                        <a href="mailto:salapuvardhan4@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>salapuvardhan4@gmail.com</a>
                    </div>
                    <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '8px' }}>LinkedIn</div>
                        <a href="https://www.linkedin.com/in/shanmukha-vardhan/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>shanmukha-vardhan</a>
                    </div>
                    <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '8px' }}>GitHub</div>
                        <a href="https://github.com/Shanmukha-Vardhan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' }}>Shanmukha-Vardhan</a>
                    </div>
                    <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)', marginBottom: '8px' }}>Location</div>
                        <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: '500' }}>Hyderabad, India</span>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
