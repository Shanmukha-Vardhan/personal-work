import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalProjects = ({ projects }) => {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 900);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return; // Skip horizontal scroll on mobile

        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        // Small delay to let layout settle
        const timer = setTimeout(() => {
            const scrollDistance = track.scrollWidth - window.innerWidth;

            const ctx = gsap.context(() => {
                gsap.to(track, {
                    x: -scrollDistance,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        pin: true,
                        scrub: 0.8,
                        end: () => `+=${scrollDistance}`,
                        invalidateOnRefresh: true,
                        anticipatePin: 1
                    }
                });
            });

            // Store for cleanup
            section._gsapCtx = ctx;
        }, 200);

        return () => {
            clearTimeout(timer);
            if (section._gsapCtx) section._gsapCtx.revert();
        };
    }, [isMobile]);

    // Mobile fallback — vertical stacked cards
    if (isMobile) {
        return (
            <section id="n-project" style={{
                padding: '80px 20px',
                background: '#ffffff'
            }}>
                {/* Heading */}
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <span style={{
                        fontSize: '1rem',
                        color: '#7b8ea8',
                        fontFamily: "'DM Serif Display', Georgia, serif",
                        display: 'block',
                        marginBottom: '4px'
                    }}>selected</span>
                    <span style={{
                        fontSize: '2.5rem',
                        fontWeight: '400',
                        color: '#1a1a1a',
                        fontFamily: "'DM Serif Display', Georgia, serif"
                    }}>projects.</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    {projects.map((project, index) => (
                        <Link
                            key={project.id}
                            to={project.slug === 'avolve-app' ? '/avolve' : `/projects/${project.slug}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <div style={{
                                background: index % 2 === 0 ? '#f5f5f5' : '#ffffff',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '1px solid #e8e8e8'
                            }}>
                                <div style={{ padding: '28px 24px 16px' }}>
                                    <div style={{
                                        fontSize: '0.8rem', fontWeight: '600', color: '#999', marginBottom: '8px'
                                    }}>0{index + 1}/ {project.title}</div>
                                    <p style={{
                                        fontSize: '0.95rem', color: '#555', lineHeight: 1.6, margin: 0
                                    }}>{project.description}</p>
                                </div>
                                <div style={{ padding: '0 24px 24px' }}>
                                    <div style={{
                                        borderRadius: '10px', overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
                                    }}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            style={{ width: '100%', height: 'auto', display: 'block' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        );
    }

    // Desktop — horizontal scroll
    return (
        <section
            id="n-project"
            ref={sectionRef}
            style={{
                overflow: 'hidden',
                position: 'relative',
                width: '100%',
                background: '#ffffff'
            }}
        >
            {/* "selected projects." — stays fixed at bottom center while pinned */}
            <div style={{
                position: 'absolute',
                bottom: '48px',
                left: 0,
                right: 0,
                textAlign: 'center',
                zIndex: 2,
                pointerEvents: 'none'
            }}>
                <span style={{
                    fontSize: '1rem',
                    color: '#7b8ea8',
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    display: 'block',
                    marginBottom: '4px'
                }}>selected</span>
                <span style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: '400',
                    color: '#1a1a1a',
                    fontFamily: "'DM Serif Display', Georgia, serif"
                }}>projects.</span>
            </div>

            {/* Horizontal track — right padding guarantees last card ends in the center */}
            <div
                ref={trackRef}
                style={{
                    display: 'flex',
                    gap: '40px',
                    paddingLeft: '15vw',
                    paddingRight: 'calc(50vw - 240px)',
                    paddingTop: '60px',
                    paddingBottom: '120px',
                    width: 'max-content',
                    alignItems: 'center',
                    height: '100vh',
                    boxSizing: 'border-box',
                    willChange: 'transform'
                }}
            >
                {projects.map((project, index) => (
                    <Link
                        key={project.id}
                        to={project.slug === 'avolve-app' ? '/avolve' : `/projects/${project.slug}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <div className="h-project-card" style={{
                            width: '480px',
                            height: '65vh',
                            minHeight: '450px',
                            maxHeight: '680px',
                            background: index % 2 === 0 ? '#ebebeb' : '#ffffff',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid #e8e8e8',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Text */}
                            <div style={{ padding: '40px 36px 24px' }}>
                                <div style={{
                                    fontSize: '0.85rem', fontWeight: '600', color: '#999', marginBottom: '12px'
                                }}>
                                    0{index + 1}/ {project.title}
                                </div>
                                <p style={{
                                    fontSize: '1rem', color: '#555', lineHeight: 1.7, margin: 0
                                }}>
                                    {project.description}
                                </p>
                            </div>

                            {/* Screenshot */}
                            <div style={{
                                flex: 1,
                                padding: '0 36px 36px',
                                display: 'flex',
                                alignItems: 'flex-end'
                            }}>
                                <div style={{
                                    width: '100%',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
                                }}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default HorizontalProjects;
