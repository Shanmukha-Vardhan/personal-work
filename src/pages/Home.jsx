import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Hero from '../components/Hero';
import HorizontalProjects from '../components/HorizontalProjects';
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
            <main style={{ background: '#ffffff' }}>
                <section style={{ padding: '40px 48px', maxWidth: '1200px', margin: '0 auto' }}>
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
                                        borderRadius: '8px',
                                        border: '1px solid #eee',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>{project.title}</h3>
                                        <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>{project.description}</p>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p style={{ color: '#666' }}>
                                No projects found matching "{searchQuery}"
                            </p>
                        )}
                    </div>
                </section>
            </main>
        );
    }

    // Best 4 projects — curated
    const selectedProjects = projects.filter(p => [101, 102, 11, 1].includes(p.id));

    const sectionLabel = {
        fontSize: '0.85rem',
        fontWeight: '600',
        color: '#1a1a1a',
        letterSpacing: '0.05em',
        marginBottom: '8px'
    };

    return (
        <main style={{ background: '#ffffff' }}>
            <SEO
                title="Shanmukha Vardhan"
                description="Developer & Designer building thoughtful digital experiences."
                url="https://shanmukha-dev.vercel.app"
            />

            {/* ===== HERO ===== */}
            <Hero />

            {/* ===== ABOUT ===== */}
            <section id="n-about" style={{
                padding: '100px 48px',
                maxWidth: '900px',
                margin: '0 auto'
            }}>
                {/* "little bit of me" heading like hers */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '60px'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '400',
                        color: '#1a1a1a',
                        fontFamily: "'DM Serif Display', Georgia, serif",
                        lineHeight: 1.2,
                        margin: 0
                    }}>
                        little bit<br />of me
                    </h2>
                </div>

                {/* 01/ About */}
                <div style={{ marginBottom: '48px' }}>
                    <div style={sectionLabel}>01/ About</div>
                    <p style={{
                        fontSize: '1.15rem',
                        lineHeight: 1.8,
                        color: '#444',
                        fontWeight: '400',
                        margin: 0
                    }}>
                        Developer and designer who builds products that feel just right — clean,
                        functional, and always a little bit thoughtful. I focus on turning ideas into
                        real, working software that people actually use, always making the experience
                        better and the business grow, hand in hand.
                    </p>
                </div>

                {/* 02/ Currently */}
                <div style={{ marginBottom: '48px' }}>
                    <div style={sectionLabel}>02/ Currently</div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px'
                    }}>
                        <p style={{ fontSize: '1.05rem', color: '#444', margin: 0, fontWeight: '400' }}>
                            Freelance Developer — building for startups & businesses
                        </p>
                        <p style={{ fontSize: '1.05rem', color: '#444', margin: 0, fontWeight: '400' }}>
                            Founder of AVOLVE Studio
                        </p>
                    </div>
                </div>

                {/* 03/ Expertise */}
                <div>
                    <div style={sectionLabel}>03/ Expertise</div>
                    <p style={{ fontSize: '1.05rem', color: '#444', margin: 0, fontWeight: '400' }}>
                        Full-stack web applications, MVPs for startups, modern business websites
                    </p>
                </div>
            </section>

            {/* ===== SELECTED PROJECTS — Horizontal Scroll ===== */}
            <HorizontalProjects projects={selectedProjects} />

            {/* ===== LIFE ===== */}
            <section id="n-life" style={{
                position: 'relative',
                width: '100%',
                minHeight: '100vh',
                overflow: 'hidden'
            }}>
                {/* Background image — full bleed */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0
                }}>
                    <img
                        src="/images/bg.png"
                        alt=""
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                </div>

                {/* Diary overlay — positioned on the left */}
                <div style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: '100vh',
                    padding: '60px 48px'
                }}>
                    <div style={{
                        maxWidth: '560px', /* slightly wider to fit everything nicely */
                        width: '50%',
                        position: 'relative'
                    }}>
                        <img
                            src="/images/dairy.png"
                            alt="A diary of things I love"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.3))'
                            }}
                        />

                        {/* Content inside the notebook */}
                        <div style={{
                            position: 'absolute',
                            top: '8%',
                            bottom: '8%',
                            left: '12%',
                            right: '20%', // Leave space for the clip
                            zIndex: 2,
                            fontFamily: '"Caveat", cursive',
                            color: '#1e293b', // slate-800
                            fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)',
                            lineHeight: '1.2'
                        }}>
                            {/* Text 1: Top Left */}
                            <div style={{
                                position: 'absolute',
                                top: '4%',
                                left: '2%',
                                width: '55%',
                                transform: 'rotate(-1deg)'
                            }}>
                                Spending hours building things that actually matter -
                                <br />and trying to make the code look clean! 🚀
                            </div>

                            {/* Photo 1: User's Image (Top Right) */}
                            <div style={{
                                position: 'absolute',
                                top: '8%',
                                right: '-8%',
                                width: '45%',
                                padding: '3%',
                                backgroundColor: '#fff',
                                boxShadow: '2px 4px 12px rgba(0,0,0,0.15)',
                                transform: 'rotate(6deg)',
                                borderRadius: '4px'
                            }}>
                                <img src="/images/life-diary.avif" alt="Life" style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '2px' }} />
                                <div style={{ fontSize: '0.8em', marginTop: '6%', textAlign: 'center', color: '#64748b' }}>
                                    Offline mode
                                </div>
                            </div>

                            {/* Doodle: Blue Arrow */}
                            <svg viewBox="0 0 100 100" style={{
                                position: 'absolute',
                                top: '32%',
                                right: '15%',
                                width: '18%',
                                transform: 'rotate(15deg)',
                                stroke: '#3b82f6', // blue instead of pink
                                strokeWidth: 3,
                                fill: 'none'
                            }}>
                                <path d="M10,10 C40,40 50,70 90,80 M70,70 L90,80 L80,95" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            {/* Text 2: Middle */}
                            <div style={{
                                position: 'absolute',
                                top: '42%',
                                left: '5%',
                                width: '42%',
                                transform: 'rotate(-2deg)'
                            }}>
                                <span style={{ color: '#059669', fontSize: '1.2em' }}>Tech & Coffee</span><br />
                                fueling the late-night deployment sessions.
                            </div>

                            {/* Photo 2: Bottom Left */}
                            <div style={{
                                position: 'absolute',
                                bottom: '4%',
                                left: '2%',
                                width: '48%',
                                padding: '4%',
                                backgroundColor: '#fff',
                                boxShadow: '1px 3px 10px rgba(0,0,0,0.12)',
                                transform: 'rotate(-4deg)',
                                borderRadius: '4px'
                            }}>
                                <img src="/images/life-diary.avif" alt="Life 2" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '2px', filter: 'grayscale(30%) contrast(1.1)' }} />
                            </div>

                            {/* Text 3: Bottom Right */}
                            <div style={{
                                position: 'absolute',
                                bottom: '15%',
                                right: '2%',
                                width: '35%',
                                transform: 'rotate(2deg)',
                                letterSpacing: '1px',
                                textAlign: 'center'
                            }}>
                                LIVING <br />
                                <span style={{ fontSize: '0.8em' }}>a little bit more everyday</span>
                                <div style={{
                                    marginTop: '8px',
                                    width: '100%',
                                    height: '3px',
                                    backgroundColor: '#fbbf24', // golden yellow stroke
                                    borderRadius: '2px',
                                    transform: 'rotate(-1deg)'
                                }}></div>
                            </div>

                            {/* Extra doodle: neutral sparkles */}
                            <div style={{
                                position: 'absolute',
                                bottom: '30%',
                                right: '10%',
                                color: '#f59e0b',
                                fontSize: '1.4em',
                                transform: 'rotate(5deg)'
                            }}>
                                ✦ ✧
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CONTACT ===== */}
            <section id="n-contact" style={{
                padding: '100px 48px',
                maxWidth: '900px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <div style={{
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: '#666',
                    letterSpacing: '0.05em',
                    marginBottom: '16px'
                }}>
                    always up for conversations.
                </div>

                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: '400',
                    color: '#1a1a1a',
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    lineHeight: 1.2,
                    marginBottom: '60px'
                }}>
                    Let's chat, shall we?
                </h2>

                {/* Contact grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '32px',
                    textAlign: 'left'
                }}>
                    <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Contact</div>
                        <a href="mailto:salapuvardhan4@gmail.com" style={{ color: '#1a1a1a', textDecoration: 'none', fontSize: '0.95rem' }}>salapuvardhan4@gmail.com</a>
                    </div>
                    <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>LinkedIn</div>
                        <a href="https://www.linkedin.com/in/shanmukha-vardhan/" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', textDecoration: 'none', fontSize: '0.95rem' }}>shanmukha-vardhan</a>
                    </div>
                    <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>GitHub</div>
                        <a href="https://github.com/Shanmukha-Vardhan" target="_blank" rel="noopener noreferrer" style={{ color: '#1a1a1a', textDecoration: 'none', fontSize: '0.95rem' }}>Shanmukha-Vardhan</a>
                    </div>
                    <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Location</div>
                        <span style={{ color: '#1a1a1a', fontSize: '0.95rem' }}>Hyderabad, India</span>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
